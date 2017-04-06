const RH = require('../../app/helpers/request-handler.js');
/**
 * Test Suite for: request-handler.js
 * @param  {}
 * @return {}
 */

describe('The RequestHandler class', function(){
  let _rh;
  let _params;

  beforeEach(()=>{
    _params = {'token': 'asoine'};
    _rh = new RH(_params);
  });

  it('should require params', ()=> {
    expect(()=> {return new RH(); }).toThrow();
  });

  it('should require token', () => {
    let _params = {'mine': 'woeicnwein'};
    expect(() => {return new RH(_params); }).toThrow();

    _params = {'token': 'asd;foiwnecli'};
    expect(() => {return new RH(_params); }).not.toThrow();
  });

  it('should have a newRequest method', () => {
    expect(_rh.newRequest).toBeDefined();
  });
});

describe('The newRequest method', () => {
  let _rh;
  let _params;

  beforeEach(()=>{
    _params = {'token': 'asoine'};
    _rh = new RH(_params);
  });

  it('should return a JSON object', () => {
    let _res = _rh.newRequest();
    expect(_res).toBeDefined();
    expect(typeof _res).toBe(typeof JSON);
  });
});
