const QB = require('../../app/helpers/query-builder.js');

let _qb;
let _params = {};

/**
 * Test Suite for: query-builder.js
 * @param  {}
 * @return {}
 */

describe('The QueryBuilder class', function(){
  it('should require params', () => {
    expect(() => {return new QB();}).toThrow();
  });

  it('should return an object', () => {
    expect(() => {return new QB(_params);}).toBeDefined();
  });

  it('should have a newQueryString method', () => {
    let _qb = new QB(_params);
    expect(_qb.newQueryString).toBeDefined();
  });
});


describe('newQueryString method', () => {
  let _qb;

  beforeEach(() => {
    _qb = new QB(_params);
  });

  it('should accept params', () => {
    expect(() => {return _qb.newQueryString();} ).not.toThrow();
    expect(() => {return _qb.newQueryString(_params); }).not.toThrow();
  });

  it('should return a string primitive', () => {
    _res = _qb.newQueryString();
    expect(_res).toBeDefined();
    expect(_res).toBeTruthy();
    expect(typeof _res).toBe(typeof String());
  });
});

