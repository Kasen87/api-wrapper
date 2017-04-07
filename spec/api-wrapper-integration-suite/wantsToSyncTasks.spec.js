/**
 * User: A node developer
 * Case: Wants to sync tasks from the Todoist API
 * Issue: Never used this library before and is trusting
 *        it to explicitly tell them what's messing up.
 */

//Using require index.js to bypass npm packing for ease
describe('A developer using the API-Wrapper', () => {
  let API, _api;
  it('should not receive errors when requiring the library', () => {
    expect(() => {return require('../../index.js'); }).not.toThrow();
    API = require('../../index.js');
  });

  it('should not receive errors when creating a new instance.', () => {
    expect(() => {return new API(); }).not.toThrow();
    _api = new API();
  });
});

describe('A developer calls the getData method', () => {
  let API = require('../../index.js');
  let _api = new API();
  let _data;
  beforeEach(() => {
    _data = null;
  });

  it('should be told that it expects parameters', () => {
    expect(() => { return _api.getData(_data);})
      .toThrow(Error("Method getData: Expecting params but received none."));

    expect(() => { return _api.getData();})
      .toThrow(Error("Method getData: Expecting params but received none."));
  });

  it('should be told it expects params as a key:value object', () => {
    _data = "dataPiece";
    expect(() => { return _api.getData(_data); })
      .toThrow(Error("Method getData: Expecting params as key:value object."));
  });


  it('should be told that something is missing in the params object', () => {
   _data = {"data":"piece"};
    expect(() => { return _api.getData(_data); })
      .toThrow(Error("Method getData: Params object missing token, sync_token, or resource_types."));
  });

  it('should be told that resource_types is suppose to be an array', () => {
    _data = { "token":"piece", "sync_token":"this", "resource_types":"everything" };
    expect(() => { return _api.getData(_data); })
      .toThrow(Error("Method getData: Expecting resource_types value as array."));
  });

  it('should not receive a Method getData: error', () => {
    _data = {"token":"piece", "sync_token":"this", "resource_types":[] };
    expect(() => { return _api.getData(_data); })
      .not.toThrow(Error("Method getData: Unexpected error."));
  });
});

describe('The response from the getData method', () => {
  let API = require('../../index.js');
  let _api = new API();
  let _data = {
    "token":"piece",
    "sync_token":"this",
    "resource_types":[]
  };

  let _res;

  beforeEach( (done) => {
    _res = _api.getData(_data);
    done();
  });

  it('starts as a promise object', () => {
    let _res = _api.getData(_data);
    expect(_res instanceof Promise).toEqual(true);
  });

  it('should contain a sync_token value', () => {
    expect(_res.sync_token).not.toBeUndefined();
    expect(_res.sync_token).toBeTruthy();
  });

  it('should not give any other error', (done) => {
    expect(() => {return _api.getData(_data);}).not.toThrow();
    done();
  });
});



/**
 * 1- User would require the module and set to a variable
 * 2- User would create a new module and expect errors telling them what they need
 * 3- User would call the getData method and expect errors telling them what they need
 * 4- User would try to log or read the returned data without processing it themselves
 * 5- User would expect to be told what is specifically wrong during the getData process
 */

