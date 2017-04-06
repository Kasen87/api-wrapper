/**
 * Class: QueryBuilder
 */
class QueryBuilder{
  constructor(params){
    if(!params){
      throw new Error("QueryBuilder is missing parameters.");
    }
  }
}

module.exports = QueryBuilder;
