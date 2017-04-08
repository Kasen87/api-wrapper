const EH = require('../../app/helpers/error-handler.js');

/**
 * Test Suite for: error-handler.js
 * @param  {}
 * @return {}
 */

describe('The ErrorHandler class', function(){
  it('does not need parameters during instantiation', () => {
    expect( () => { return new EH(); }).not.toThrow();
  });
});
