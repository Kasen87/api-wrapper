const QB = require('../../app/helpers/query-builder.js');

/**
 * Test Suite for: query-builder.js
 * @param  {}
 * @return {}
 */

describe('The QueryBuilder class', function(){

  describe('has a constructor', function(){
    beforeEach(function(){
      var _qb = null;
    });

    it('and requires a glob of arguments', function(){
      expect( function(){ _qb = new QB(); } ).toThrow();
      expect( function(){ _qb = new QB("Josh"); }).not.toThrow();
    });

    it('and requires a valid urlBase param to be passed in', function(){

    });

    it('and requires a valid urlEndpoint param to be passed in', function(){

    });
  });

});


/**
 * 1 - module to build the query string, sanitize it, etc
 * 2 - module to make api request, return promise, etc.
 * 3 - module to validate server response & data format
 * 4 - module to validate user input
 * 5 - module to handle all processing errors
 */
