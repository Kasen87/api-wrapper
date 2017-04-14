/**
 * Class: RequestHandler
 */
const request = require('request');
const rp_native = require('request-promise-native');
const testEnv = require(process.cwd()+'/app/helpers/setupNock.js');

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
