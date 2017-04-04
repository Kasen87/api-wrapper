/**
 * Class: QueryBuilder
 */
class QueryBuilder{
  constructor(props){
    if(!props){ throw new Error("No props supplied."); }
    this.props = props;
  }

  sayHello(){
    console.log('Hello from Query-Builder!');
  }
}

module.exports = QueryBuilder;
