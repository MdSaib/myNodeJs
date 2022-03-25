// exports is used for sharing the data (variable, function, object etc.) across all module (global).

//3 ways of exports a data

// way 1: using module.exports.something


module.exports.add = (a, b) => a + b;

const sub = (a, b) => a - b;
const div = (a, b) => a / b;

const test = (a, b) => add(a, b) / sub(a, b)

// way2: put the data inside module.exports object
/*
module.exports = {
  test,
  add
}
*/
// way3: put the data inside a variable, then put the variable module.exports.something (object notation)

//module.exports.add = add;
module.exports.test = test; 
