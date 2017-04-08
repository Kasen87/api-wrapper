// main.js
const InputValidator = require('./helpers/input-validator.js');
class ApiWrapper {
  constructor(){

  }

  getData(parameters){
    let _params = parameters;
    let _IV = new InputValidator();

    if (!_IV.validateInput(_params) ) {
      let _errPrefix = "Method getData";
      if(!_params) {
        throw new Error(`${_errPrefix}: Expecting params but received none.`);
      }
      if( !(_params instanceof Object) || _params.length <= 0 ) {
        throw new Error(`${_errPrefix}: Expecting params as key:value object.`);
      }
      if (!_params.token || !_params.sync_token || !_params.resource_types) {
        throw new Error(`${_errPrefix}: Params object missing token, sync_token, or resource_types.`);
      }
      if (!(_params.resource_types instanceof Array)) {
        throw new Error(`${_errPrefix}: Expecting resource_types value as array.`);
      }
    }

    let _returnObj = new Promise((resolve, reject) => {
      let _tempBool = true;
      if (!_tempBool) { return reject({"status": "requestFailed"}); }
      return resolve({"sync_token": "1"});
    });
    return _returnObj;
  }

  getBaseURL(){

  }

  setBaseURL(){

  }

  getEndpoint(){

  }

  setEndpoint(){

  }

  getRequestMethod(){

  }

  setRequestMethod(){

  }
}

module.exports = ApiWrapper;
