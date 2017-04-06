// main.js
class ApiWrapper {
  constructor(){

  }

  getData(params){
    if(!params) { throw new Error('Missing parameters'); }

    if(!params.token || !params.sync_token || !params.resource_types){
      throw new Error('Not enough data to make API call.');
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
