const ScoreAPI = require("../../lib_score-api/score_api.js");
const nock = require('nock');

describe("A score_api module", function(){
  let _scoreAPI = new ScoreAPI();

  let _customer = {
      income: 50000,
      zipcode: 60201,
      age: 35
  }

  it("has a rankCustomer method", function(){
    expect(_scoreAPI.rankCustomer).not.toBeUndefined();
    expect(typeof _scoreAPI.rankCustomer).toEqual('function');
    
    
  })

  describe("The rankCustomer method", function(){
      let _promise;
      let _result;
      let _baseURL = "http://www.example.com";
      let _path = "/customer_scoring?income=50000&zipcode=60201&age=35";

      beforeEach(function(done){
        nock(_baseURL).get(_path).reply(200, {
          propensity: 0.2,
          ranking: 'C'
        });
        _promise = _scoreAPI.rankCustomer(_customer.income, _customer.zipcode, _customer.age);
        _promise.then(function(response){
          _result = response;
          done();
        }, (reason) =>{
          console.log(`Promise rejected because of ${reason}`);
          done();
        })
      })

      it("should have returned JSON object", function(){
        expect(_result).not.toEqual({'c': 2});
        expect(_result).not.toBeUndefined();
      })

      it("should throw an error if missing a piece of data", function(done){
        expect(_scoreAPI.rankCustomer).toThrow();
        var closure = () => { return _scoreAPI.rankCustomer(5,4)}
        expect(closure).toThrow()
        done();
      })

      it("should contain a propensity value", function(done){
        expect(_result.propensity).not.toBeUndefined();
        expect(typeof _result.propensity).toEqual('number');
        done();
      })

      it("should contain a ranking value", function(done){
        expect(_result.ranking).not.toBeUndefined();
        expect(typeof _result.ranking).toEqual('string');
        done();
      })
    })

  it("has a newEndpoint method", function(){
    expect(_scoreAPI.newEndpoint).not.toBeUndefined();
    expect(typeof _scoreAPI.newEndpoint).toEqual('function');
    })


  describe("and the newEndpoint method", function(){
    let _result;
    let _targetURL = 'http://www.example.com/customer_scoring?income=50000&zipcode=60201&age=35';

    beforeEach(function(done){
      _result = _scoreAPI.newEndpoint(_customer);
      done();
    })

    it("should throw an error if no data", function(){
      expect(_scoreAPI.newEndpoint).toThrow();
    })
    
    it("should return a string with a custom url endpoint", function(){
      expect(_result).not.toEqual('');
      expect(_result).not.toBeUndefined();
      expect(_result).toEqual(_targetURL)
    })

  })
})