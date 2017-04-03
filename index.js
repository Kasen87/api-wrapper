// index.js
//Does the lib-reg.json file exist?
let _fs = require('fs');

//Same source & path?
let a, b;

_fs.readdir('./', (err, files) => {
  if (err) {
    console.log("error arose: ", err);
  }

  a = files;
  _fs.realpath(a[4], (err, resolvedPath) => {
    if (err) {
      console.log("error arose: ", err);
    }
    b = resolvedPath;
    console.log("index.js file resolved to path of: ", resolvedPath);
    //console.log(b == process.cwd()+'\\index.js' ? true : false);
  })

})



