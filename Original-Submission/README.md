# Challenge Solution
- Date: 03/13/17

# Dependencies
- To Use The Library
  - [NodeJS: 6.10.0](https://nodejs.org/en/download/)

- To Test The Library
  - [Jasmine: 2.5.3](https://jasmine.github.io/)
  - [Nock: 9.0.9](https://www.npmjs.com/package/nock#install)

# Installation
- After setting up the initial NodeJS project, move the entire lib_score-api directory into the project folder

# How To Use ScoreAPI (basic)
- Require the ScoreAPI module in the file you wish to use it in
```const ScoringAPI = require('./lib_score-api/score_api.js');```

- Create an instance of the module
```let _scoreAPI = new ScoringAPI();```

- Rank a customer with their income, zipcode, & age _returns a promise_
```let clientScore = _scoreAPI.rankCustomer(income, zipcode, age);```
  
  - Be sure to handle this like a typical promise
    `clientScore.then( function(response){
      //do something about successful promise
    }, (reason) => {
      //do something about failure of promise
    })`

  - rankCustomer will return the JSON object if successful
    ```{propensity: 0.25, ranking: 'C'}```

  - or a JSON object with error details within it
    ```{err: 'message'}```

# How to Use ScoreAPI (advanced)
ScoreAPI has three main components
  - The rankCustomer method
  - The newEndpoint method
  - The RequestHandler module
    - Contains a callAPI method

## The rankCustomer Method
- Accepts three parameter: income, zipcode, and age
- Returns a promised object that will contain the return values from the get request

## The newEndpoint Method
- Accepts a single JSON formatted parameter:
  - Customer = { income: 5, zipcode: 25058, age: 35}
- Returns a full url for use in calling the api endpoint
  - the url returned uses two attributes of ScoreAPI
    - this._baseURL & this._path

## The RequestHandler Module
- This module can be replaced if desired

### The callAPI method
- Accepts a single url string parameter
- Returns a promise object with a resolve and reject handlers


# Testing
To begin testing with the test suite, run the following commands
- Install Jasmine

```npm install -g jasmine```

- Setup Jasmine

```jasmine init```

- Copy the tst_**-spec.js files into the newly added _'spec'_ directory

- Install Nock (for mocking http queries & responses)

```npm install nock```

- To run the suite of tests

```jasmine```

# Example Included
I've included a couple of use examples within the index.js file.
