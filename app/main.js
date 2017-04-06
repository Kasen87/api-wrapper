// main.js
class ApiWrapper {
  constructor(){

  }

  getRanking(params){
    if(!params) { throw new Error('Missing parameters'); }

    if(!params.income || !params.zipcode || !params.age){
      throw new Error('Not enough data to call api.');
    }

    let _retObj = {
      "propensity": 0.0,
      "ranking": "F"
    };
    return _retObj;
  }

  getBaseURL(){
    return "a url value";
  }

  setBaseURL(){

  }

  getEndpoint(){

  }

  setEndpoint(){

  }
}

module.exports = ApiWrapper;
