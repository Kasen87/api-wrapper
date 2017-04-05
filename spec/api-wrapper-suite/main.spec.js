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
});
