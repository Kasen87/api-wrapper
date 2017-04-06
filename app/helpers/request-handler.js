/**
 * Class: RequestHandler
 */
class RequestHandler{
  constructor(params) {
    if(!params){throw new Error("RequestHandler is missing parameters."); }
    if(!params.token) {throw new Error("RequestHandler requires a user API token."); }
  }

  newRequest(){
    return {};
  }
}

module.exports = RequestHandler;
