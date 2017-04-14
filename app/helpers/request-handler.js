/**
 * Class: RequestHandler
 */
const request = require('request');
const rp_native = require('request-promise-native');
const testEnv = require(process.cwd()+'/app/helpers/setupNock.js');

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

class RequestHandler{
  constructor(props, isTest) {
    if(!props) throw new TypeError();
    this._props = props;

    if (isTest) { testEnv(); }
  }

  newRequest(userToken){
    if(!userToken){ throw new TypeError(); }
    let _userObj = {
      token: userToken,
      sync_token: '*',
      resource_types: '["all"]'
    };

    let options = {
      method: 'POST',
      uri: 'https://todoist.com/API/v7/sync',
      form: _userObj,
      json: true
    };

    let _promiseObject = rp_native(options).promise();
    return _promiseObject;
  }
}

module.exports = RequestHandler;
