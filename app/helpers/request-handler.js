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

  newRequest(params){
    let _userObj = {
      token: '2a19a840402eeaeea393ccd0cd2fca7cc5dd5493',
      sync_token: '*',
      resource_types: '["projects"]'
    };

    let options = {
      method: 'POST',
      uri: 'https://todoist.com/API/v7/sync',
      form: _userObj,
      json: true
    };

    return rp_native(options);
  }
}

module.exports = RequestHandler;
