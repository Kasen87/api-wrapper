// score_api.js
const RequestHandler = require ('../lib_score-api/request_handler');

class ScoreAPI { 
  constructor(baseURL, path) {
    this._baseURL = "http:/ xwww.example.com"
    this._path = "/customer_scoring?"
  }


  //Should
  rankCustomer(income, zipcode, age) {
    if (!income || !zipcode || !age) { 
      throw new Error(`Missing Data at rankCustomer()\n- Income: ${income} - Zipcode: ${zipcode} - Age: ${age}`)
    }
    
    let _requestHandler = new RequestHandler();

    let _customerData = {
      income: income,
      zipcode: zipcode,
      age: age
    };

    let _tempURL;
    let _results;

    try {
      _tempURL = this.newEndpoint(_customerData);
      _results = _requestHandler.callAPI(_tempURL);
    } catch(e) {
      _results = {
        err: e
      }
    }

    return _results;
  }

  newEndpoint(data) { 
    if (!data) { throw new Error('No data for endpoint.') };

    let _endpoint = [this._baseURL + this._path]

    for (let _key in data) {
          _endpoint[1] += '=' + data[_key]; 
    }

    return _endpoint.join('')
  }

  
}

module.exports = ScoreAPI;