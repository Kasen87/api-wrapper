/**
 * Class: InputValidator
 */
class InputValidator{
  constructor(props){
    if(!props){ throw new Error("No props supplied."); }
    this.props = props;
  }

  sayHello(){
    console.log('Hello from Input-Validator!');
  }
}

module.exports = InputValidator;
