/**
 * User: A node developer
 * Case: Wants to sync tasks from the Todoist API
 * Issue: Never used this library before and is trusting
 *        it to explicitly tell them what's messing up.
 */

//Using require index.js to bypass npm packing for ease
describe('The API-Wrapper package', () => {
  let API;
  let _api;
  let _data;

  it('should not throw errors when requiring the index.js file', () => {
    expect(() => {return require('../../index.js'); }).not.toThrow();
    API = require('../../index.js');
  });

  it('should not throw errors on instantion of API-Wrapper class', () => {
    expect(() => {return new API(); }).not.toThrow();
    _api = new API();
  });

  it('should tell me that data is missing for a proper API call', () => {
    expect(() => { return _api.getData(); })
    .toThrow(Error("Parameters required to use getData method."));

    _data = "dataPiece";
    expect(() => { return _api.getData(_data); })
    .toThrow(Error("Expecting parameters as key:value object, not string"));

    _data = {"data":"piece"};
    expect(() => {return _api.getData(_data); })
      .toThrow(Error("Missing parameters: token, sync_token, and/or resource_types"));

    _data = {
      "token":"piece",
      "sync_token":"this",
      "resoure_types":"everything",
    };
    expect(() => {return _api.getData(_data); })
      .toThrow(Error("Missing parameters: token, sync_token, and/or resource_types"));
  });
});



/**
 * 1- User would require the module and set to a variable
 * 2- User would create a new module and expect errors telling them what they need
 * 3- User would call the getData method and expect errors telling them what they need
 * 4- User would try to log or read the returned data without processing it themselves
 * 5- User would expect to be told what is specifically wrong during the getData process
 */

