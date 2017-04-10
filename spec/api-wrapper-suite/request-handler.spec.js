/**
* File: spec/api-wrapper-suite/request-handler.spec.js
* Name: RequestHandler Suite
* Testing: request-handler.js
* Notes:
*/
const RH = require('../../app/helpers/request-handler.js');
const fs = require('fs');
const rawData = new Promise( (resolve, reject) => {
  fs.readFile('testData.json', 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    try {
      let _parsedData = JSON.parse(data);
      resolve(_parsedData);
    } catch(e) {
      reject(e);
      console.log(e.message);
    }
  });
});

describe('The RequestHandler class', () => {
  let _data;
  beforeEach( (done) => {
    rawData.then( function(response){
      _data = response;
      done();
    }, (reason) => {
      console.log(reason);
      done();
    });
  });

  it('requires a base url to be instantiated', () => {
    expect( () => { return new RH(); }).toThrow();
    expect( () => { return new RH(_data.todoist.baseURL); }).not.toThrow();
  });

  describe('has a newRequest method that', () => {
    let _rh;
    beforeEach( () => {
      _rh = new RH(_data.todoist.baseURL);
    });

    it('is defined and accessible', () => {
      expect(_rh.newRequest).toBeDefined();
    });

    it('accepts an optional object argument only as a key:value pair', () => {
      expect(() => { return _rh.newRequest(); }).not.toThrow();
      expect(() => {
        return _rh.newRequest({"endpoint":_data.todoist.endpoint}); })
      .not.toThrow();
      expect(() => { return _rh.newRequest(_data.todoist.endpoint); }).toThrow();
    });

    it('returns a promise object', () => {
      let _res = _rh.newRequest();
      expect(_res).toEqual(jasmine.any(Promise));
    });

    it('should resolve to JSON data', (done) => {
      let _res = _rh.newRequest();
      _res.then(function(response){
        console.log("Response is: ", response);
        console.log("Sync-Token", response.sync_token);
        done();
      }, (reason) => {
        console.log("Rejected for:", reason);
        done();
      });
    });
  });
});




