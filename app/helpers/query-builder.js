/**
 * Class: QueryBuilder
 */
class QueryBuilder{
  constructor(params){
    if(!params){
      throw new Error("QueryBuilder is missing parameters.");
    }
  }

  newQueryString(){
    return "truthy";
  }
}

module.exports = QueryBuilder;
