let RequestHandler = require("../../lib_score-api/request_handler");
let nock = require('nock');
describe("A RequestHandler module", function(){
  let _requestHandler = new RequestHandler();

  it("has a callAPI method.", function(){
      expect(_requestHandler.callAPI).not.toBeUndefined();
      expect(typeof _requestHandler.callAPI).toEqual('function');
    })
  describe("The callAPI method", function(){
      let _baseURL = "http://www.example.com";
      let _path = "/customer_scoring?income=50000&zipcode=60201&age=35";
      let _promise;
      
      beforeEach(function(done){
        nock(_baseURL).get(_path).reply(200, {
            propensity: 0.2,
            ranking: 'C'
          });
        nock(_baseURL).get("/").reply(404, {
            propensity: 0.2,
            ranking: 'C'
          });

        _promise = _requestHandler.callAPI(_baseURL);
        done();
      })
      
      it("requires a url parameter", function(){
        expect(_requestHandler.callAPI).toThrowError('InvalidURL');
      })

      it("should return a promise", function(){
        expect(_promise).not.toBeUndefined();
        expect(_promise).toEqual(jasmine.any(Promise));
      })

      it("should return a non-empty json object", function(done){
        let _promise = _requestHandler.callAPI(_baseURL+_path)
        _promise.then( (response) => {
          expect(response).not.toBeUndefined();
          expect(response).not.toEqual({})
          done();
        }, (reason) => {
          done(new Error("Promise should have resolved: " + reason));
        })
      })
  })
})