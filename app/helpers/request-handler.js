/**
 * Class: RequestHandler
 */
const request = require('request');
const rp_native = require('request-promise-native');

class RequestHandler{
  constructor(baseURL) {
    if(!baseURL) throw new TypeError();
    this._baseURL = baseURL;
  }

  newRequest(userToken){
    if(!userToken){ throw new TypeError(); }
    let _userObj = {
      token: userToken,
      sync_token: '*',
      resource_types: '["projects"]'
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
