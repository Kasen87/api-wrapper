const fs = require('fs');
const nock = require('nock');
const todoistFile = process.cwd() + '/_test-sync-data/initialSyncResponse.json';

function setupNockResponse(){
  let _file = new Promise( (res, rej) => {
    fs.readFile(todoistFile, 'utf8', (err, data) => {
      if (err) {
        rej(err);
        return;
      }
      try {
        //let _retData = JSON.parse(data);
        res(data);
      } catch(e) {
        rej(e);
        console.log(e.message);
      }
    });
  });

  let _nockResponse = {};

  _file.then( function(res){
    _nockResponse = res;
  }, (err) => {
    console.log("Setup Nock Error:", err);
    _nockResponse = JSON.stringify(`{"Nock Setup Error": ${err}}`);
  });

  nock('https://todoist.com')
    .post('/API/v7/sync')
    .reply(200, _nockResponse);
}

module.exports = setupNockResponse;
