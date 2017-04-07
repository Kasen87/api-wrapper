// main.js
class ApiWrapper {
  constructor(){

  }

  getData(params){
    let _errPrefix = "Method getData";
    if (!params) {
      throw new Error(`${errPrefix}: Expecting params but received none.`);
    }

    if (typeof params != typeof Object()) {
      throw new Error(`${errPrefix}: Expecting params as key:value object.`);
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
