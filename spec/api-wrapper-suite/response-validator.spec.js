const RV = require('../../app/helpers/response-validator.js');

/**
 * Test Suite for: response-validator.js
 * @param  {}
 * @return {}
 */

describe('The ResponseValidator class', function(){
  let _rv;

  beforeEach(() => {
    _rv = new RV();
  });

  it('should have a validateURL method', () => {
    expect(_rv.validateResponse).toBeDefined();
  });
});
