const IV = require('../../app/helpers/input-validator.js');
const TEST_INPUT = {
  "simpleString": "Hello, World!",
  "simpleNumber": 1234567890,
  "emptyArray": [],
  "emptyObject": {},
  "ToDoistExample": {
    "token":"piece",
    "sync_token":"*",
    "resource_types":[]
  },
  "invalidExample": "Invalid Text!"
};
/**
 * Test Suite for: input-validator.js
 * @param  {}
 * @return {}
 */

describe('The InputValidator class', function(){
  let _iv;

  it('requires a path to the testing criteria', () => {
    expect( () => { return new IV(); }).toThrow();
    expect( () => { return new IV('./validateCritera.txt'); }).not.toThrow();
  });

  beforeEach( () => {
    _iv = new IV();
  });

  it('has a validateURL method', () => {
    expect(_iv.validateURL).toBeDefined();
  });

  it('has a validateInput method', () => {
    expect(_iv.validateInput).toBeDefined();
  });
});

describe('The validateInput method', () => {
  let _iv, _testInput;
  beforeEach( () => {
    _iv = new IV();
    _testInput = TEST_INPUT;

  });
  it('requires parameters to test against', () => {
    expect( () => { return _iv.validateInput(); }).toThrow();
    expect( () => { return _iv.validateInput(_testInput); }).not.toThrow();
  });
  it('returns true if valid input', () => {
    expect( () => { return _iv.validateInput(_testInput); }).toBe(true);
  });
  it('returns false if invalid input', () => {
    expect( () => { return _iv.validateInput("Invalid text!"); }).toBe(false);
  });
});
