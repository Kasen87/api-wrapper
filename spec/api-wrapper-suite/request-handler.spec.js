/**
* File: spec/api-wrapper-suite/request-handler.spec.js
* Name: RequestHandler Suite
* Testing: request-handler.js
* Notes:
*/
const RH = require('../../app/helpers/request-handler.js');
const fs = require('fs');
const rawData = new Promise( (resolve, reject) => {
  fs.readFile('_test-sync-data/testData.json', 'utf8', (err, data) => {
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
    let _token;
    beforeEach( (done) => {
      rawData.then( function(response){
        _data = response;
        done();
      }, (reason) => {
        console.log(reason);
        done();
      });
      _token = _data.todoist.user_token;
      _rh = new RH(_data.todoist.baseURL);

    });

    it('is defined and accessible', () => {
      expect(_rh.newRequest).toBeDefined();
    });

    it('requires an auth token string to be passed in', () => {
      expect(() => { return _rh.newRequest(); }).toThrow();
      expect(() => { return _rh.newRequest(_token); }).not.toThrow();
    });

    it('returns a promise object', () => {
      let _res = _rh.newRequest(_token);
      expect(_res).toEqual(jasmine.any(Promise));
    });

    it('should resolve to JSON data', (done) => {
      let _res = _rh.newRequest(_token);
      _res.then(function(response){
        expect(response).toBeDefined();
        expect(response.sync_token).toBeDefined();
        expect((response instanceof Object)).toBe(true);
        done();
      }, (reason) => {
        console.log("Rejected for:", reason);
        done();
      });
    });
  });
});




