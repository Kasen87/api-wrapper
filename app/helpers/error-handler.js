/**
 * Class: ErrorHandler
 */
class ErrorHandler{
  constructor(props){
    if(!props){ throw new Error("No props supplied."); }
    this.props = props;
  }

  sayHello(){
    console.log('Hello from Error-Handler!');
  }
}

module.exports = ErrorHandler;
