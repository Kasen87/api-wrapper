// main.js
const _QB = require('./helpers/query-builder.js');
const _RH = require('./helpers/request-handler.js');
const _EH = require('./helpers/error-handler.js');
const _RV = require('./helpers/response-validator.js');
const _IV = require('./helpers/input-validator.js');

class ApiWrapper {
  constructor(props){
    this.props = props;
  }
}

module.exports = ApiWrapper;
