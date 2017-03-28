class RequestHandler {
  constructor(){

  }

  callAPI(url){
      if(!url){throw new Error("InvalidURL")};

      return new Promise( (resolve, reject) => {
        const library = url.startsWith('https') ? require('https') : require('http');
        const request = library.get(url, (response) => {
          let statusCode = response.statusCode;
          let contentType = response.headers['content-type'];

          let error;
          if(statusCode < 200 || statusCode >= 300 ) { 
            error = new Error(`Failed Request: ${statusCode}`); 
          }
          else if (!/^application\/json/.test(contentType)) {
            error = new Error(`Invalid content-type.\n` + 
              `Unexpected ${contentType}`);
          }

          if (error) {
            console.log(error.message);
            response.resume()
            reject(error);
            return;
          }

          let rawData = '';
          response.setEncoding('utf8');
          response.on('data', (chunk) => rawData += chunk);
          response.on('end', () => {
            try {
              let parsedData = JSON.parse(rawData);
              resolve(parsedData);
            } catch (e) {
              reject(e)
              console.log(e.message);
            }
          })
        }).on('Got error', (err) => reject(err));
      })
    }

}
module.exports = RequestHandler;