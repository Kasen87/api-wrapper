/**
 * User: A node developer
 * Case: Wants to sync tasks from the Todoist API
 * Issue: Never used this library before and is trusting
 *        it to explicitly tell them what's messing up.
 */

//Using require index.js to bypass npm packing for ease
describe('A developer using the API-Wrapper', () => {
  let API;
  let _api;
  let _data;

  it('should not receive errors when requiring the library', () => {
    expect(() => {return require('../../index.js'); }).not.toThrow();
    API = require('../../index.js');
  });

  it('should not receive errors when creating a new instance.', () => {
    expect(() => {return new API(); }).not.toThrow();
    _api = new API();
  });

  describe('and calling the getData method', () => {
    it('should be told that it expects parameters', () => {
      expect(() => { return _api.getData(_data);})
      .toThrow("Method getData: Expecting params but received none.");
    });

    _data = "dataPiece";
    it('should be told it expects params as a key:value object', () => {
      expect(() => {
        return _api.getData(_data);
      }).toThrow(Error("Method getData: Expecting params as key:value object."));
    });

    _data = {"data":"piece"};

    it('should be told that something is missing in the params object', () => {
      expect(() => {
        return _api.getData(_data);
      }).toThrow(Error("Method getData: Params object missing token, sync_token, or resource_types."));
    });
    _data = {
      "token":"piece",
      "sync_token":"this",
      "resource_types":"everything",
    };
    it('should be told that resource_types is suppose to be an array', () => {
      expect(() => {
        return _api.getData(_data);
      }).toThrow("Method getData: Expecting resource_types value as array.");
    });

    _data = {
      "token":"piece",
      "sync_token":"this",
      "resource_types":[],
    };
    it('should not receive a Method getData: error', () => {
      expect(() => {
        return _api.getData(_data);
      }).not.toThrow("Method getData: Unexpected error.");
    });
  });
});



/**
 * 1- User would require the module and set to a variable
 * 2- User would create a new module and expect errors telling them what they need
 * 3- User would call the getData method and expect errors telling them what they need
 * 4- User would try to log or read the returned data without processing it themselves
 * 5- User would expect to be told what is specifically wrong during the getData process
 */

