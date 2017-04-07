const IV = require('../../app/helpers/input-validator.js');

/**
 * Test Suite for: input-validator.js
 * @param  {}
 * @return {}
 */

describe('The InputValidator class', function(){
  let _iv;

  beforeEach(() => {
    _iv = new IV();
  });

  it('should have a validateURL method', () => {
    expect(_iv.validateURL).toBeDefined();
  });

  it('should have a validateInput method', () => {
    expect(_iv.validateInput).toBeDefined();
  });
});
