// main.js
class ApiWrapper {
  constructor(){

  }

  getData(parameters){
    let _params = parameters;
    let _errPrefix = "Method getData";

    if(!_params) {
      console.log("No params:", _params);
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

    return {};
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
