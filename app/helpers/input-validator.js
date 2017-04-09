/**
 * Class: InputValidator
 */
class InputValidator{
  constructor(pathToCriteria){
    if (!pathToCriteria) { throw new Error("No pathToCriteria."); }
  }

  validateURL(){

  }

  validateInput(testParams) {
    //way too generic of a method - possibly redundant?
    if(!testParams) {
      throw new Error("Nothing to test.");
    }

    if (testParams != "Invalid text!") {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = InputValidator;
