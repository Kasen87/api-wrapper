// score_api.js
const RequestHandler = require ('../lib_score-api/request_handler');

class ScoreAPI { 
  constructor(baseURL, path) {
    this._baseURL = "http://www.example.com"
    this._path = "/customer_scoring?"
  }

  rankCustomer(income, zipcode, age) {
    if (!income || !zipcode || !age) { 
      throw new Error(`Missing Data at rankCustomer()\n- Income: ${income} - Zipcode: ${zipcode} - Age: ${age}`)
    }
    
    let _requestHandler = new RequestHandler();

    let _customerData = {
      income: income,
      zipcode: zipcode,
      age: age
    };

    let _tempURL;
    let _results;

    try {
      _tempURL = this.newEndpoint(_customerData);
      _results = _requestHandler.callAPI(_tempURL);
    } catch(e) {
      _results = {
        err: e
      }
    }

    return _results;
  }

  newEndpoint(data) { 
    if (!data) { throw new Error('No data for endpoint.') };

    let _endpoint = [this._baseURL + this._path]

    for (let _key in data) {
      switch (_key) {
        case 'income':
          _endpoint[1] = 'income=' + data[_key]; 
          break;
        case 'zipcode': 
          _endpoint[2] = '&zipcode=' + data[_key];
          break;
        case 'age':
          _endpoint[3] = '&age=' + data[_key];
          break;
        default:
          console.log(_key, data[_key])
          break;
       } 
    }

    return _endpoint.join('')
  }

  
}

module.exports = ScoreAPI;