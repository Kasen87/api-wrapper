/**
 * Class: RequestHandler
 */
class RequestHandler{
  constructor(baseURL) {
    if(!baseURL) throw new TypeError();
    this._baseURL = baseURL;
  }

  newRequest(){

  }
}

module.exports = RequestHandler;
