/**
 * Class: RequestHandler
 */
class RequestHandler{
  constructor(props){
    if(!props){ throw new Error("No props supplied."); }
    this.props = props;
  }

  sayHello(){
    console.log('Hello from Request-Handler!');
  }
}

module.exports = RequestHandler;
