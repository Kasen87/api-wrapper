const api_wrapper = require('../../app/main.js');

/**
 * Test Suite for: main.js
 * @param  {}
 * @return {}
 */

describe('The APIWrapper class', function(){
  let _API;

  beforeEach(function(){
    _API = new api_wrapper();
  });

  it('should return a new object', function(){
    expect(_API).toBeDefined();
    expect(typeof _API).toBe(typeof Object());
  });

  it('should have a getRanking method', function(){
    expect(_API.getRanking).toBeDefined();
  });

  it('should have a getBaseURL method', function(){
    expect(_API.getBaseURL).toBeDefined();
  });

  it('should have a setBaseURL method', function(){
    expect(_API.setBaseURL).toBeDefined();
  });

  it('should have a getEndpoint method', function(){
    expect(_API.getEndpoint).toBeDefined();
  });

  it('should have a setEndpoint method', function(){
    expect(_API.setEndpoint).toBeDefined();
  });
});


describe("The getRanking method", function(){
  let _API;
  let _FullDataObj = {
    "name": "John",
    "income": 50000,
    "zipcode": 60675,
    "age": 35
  };
  let _MissingDataObj = {
    "income": 50000,
    "zip": 4884124,
    "age": 35
  };

  beforeEach(function(){
    _API = new api_wrapper();
  });

  it("should throw an error if no params passed in", function(){
    expect( function(){ return _API.getRanking(); }).toThrow();
  });

  it("should throw an error if a piece of data is missing", function(){
    expect( function(){ return _API.getRanking(_MissingDataObj); }).toThrow();
  });

  it("should return a JSON object with values", function(){
    let _res = _API.getRanking(_FullDataObj);
    expect(_res).toBeDefined();
    expect(typeof _res).toBe(typeof JSON);
    expect(_res.propensity).toBeDefined();
    expect(_res.ranking).toBeDefined();
  });
});
