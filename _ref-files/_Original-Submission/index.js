//Require the library
const ScoringAPI = require('./lib_score-api/score_api.js');


//Start a nock handler to test the API calls from here
const nock = require('nock');
let _tempURL = 'http://www.example.com';
let _returnTest = {
  propensity: 0.25,
  ranking: 'C'
}

nock(_tempURL).get('/customer_scoring?income=50000&zipcode=60674&age=35').reply(200, _returnTest);

customerJohn = {
  income: 50000,
  zipcode: 60674,
  name: 'John',
  age: 35
}

let _scoreAPI = new ScoringAPI();

let clientScore = _scoreAPI.rankCustomer(customerJohn.income, customerJohn.zipcode, customerJohn.age);

clientScore.then(function(response){
  if (response.ranking == 'C') {
  console.log(response)
} else {
  console.log(response.propensity);
}
}, (reason) => {
  console.log(reason);
})