const IV = require('../../app/helpers/input-validator.js');
const TEST_INPUT = '../../testData.json';
/**
 * Test Suite for: input-validator.js
 * @param  {}
 * @return {}
 */

describe('The InputValidator class', function(){
  let _iv;

  it('requires a path to the testing criteria', () => {
    expect( () => { return new IV(); }).toThrowError();
    expect( () => { return new IV(TEST_INPUT); }).not.toThrow();
  });

  beforeEach( () => {
    _iv = new IV(TEST_INPUT);
  });

  it('has a validateURL method', () => {
    expect(_iv.validateURL).toBeDefined();
  });

  it('has a validateInput method', () => {
    expect(_iv.validateInput).toBeDefined();
  });
});

describe('The validateInput method', () => {
  let _iv;
  beforeEach( () => {
    _iv = new IV(TEST_INPUT);
  });
  it('requires parameters to test against', () => {
    expect( () => { return _iv.validateInput(); }).toThrow();
    expect( () => { return _iv.validateInput(TEST_INPUT); }).not.toThrow();
  });
  it('returns true if valid input', () => {
    _res = _iv.validateInput(TEST_INPUT);
    expect(_res).toBe(true);
  });
  it('returns false if invalid input', () => {
    _res = _iv.validateInput("Invalid text!");
    expect(_res).toBe(false);
  });
});
