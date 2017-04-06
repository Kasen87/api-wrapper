const api_wrapper = require('../../app/main.js');
const _baseURL = "https://todoist.com";
const _endpoint = "/API/v7/sync";
const _requestMethod = "POST";
const _userToken = "PH123456789c12348579c";
/**
 * Test Suite for: main.js
 * @param  {}
 * @return {}
 */

describe('The APIWrapper class', function(){
  let _API;
  let _urlData = {
    "baseURL": _baseURL,
    "endpoint": _endpoint,
    "requestMethod": _requestMethod,
    "user_token": _userToken
  };

  describe('constructor method', function(){
    beforeEach(() => {
      _API = new api_wrapper(_urlData);
    });

    it("will not throw error if params are present or not", function(){
      expect(() => { return new api_wrapper(); }).not.toThrow();
      expect(() => { return new api_wrapper(_urlData); }).not.toThrow();
    });

    it('should return a new object', function(){
      expect(_API).toBeDefined();
      expect(typeof _API).toBe(typeof Object());
    });
  });

  //Further in-depth tests
  describe("public methods", () => {
    beforeEach(() => {
      _API = new api_wrapper(_urlData);
    });

    it('should have a getData method', function(){
      expect(_API.getData).toBeDefined();
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

    it('should have a getRequestMethod method', function(){
      expect(_API.getRequestMethod).toBeDefined();
    });

    it('should have a setRequestMethod method', function(){
      expect(_API.setRequestMethod).toBeDefined();
    });
  });
});

/**
 * Testing: ApiWrapper.getData()
 * /-Internally needs to process the request and more...
 */
describe("The getData method", function(){
  let _API;
  let _syncData = {
    "token": 'asdfienlo23845',
    "sync_token": '*',
    "resource_types": '["all"]'
  };

  beforeEach(function(){
    _API = new api_wrapper();
  });

  it("should throw an error if no params passed in", function(){
    expect( function(){ return _API.getData(); }).toThrow();
  });

  it("should throw an error if a piece of data is missing", function(){
    expect( function(){ return _API.getData(); }).toThrow();
  });

  it("should return a JSON object with values", function(){
    let _res = _API.getData(_syncData);
    expect(_res).toBeDefined();
    expect(typeof _res).toBe(typeof JSON);
  });
});
