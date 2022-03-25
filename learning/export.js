// export is used for sharing the data (variable, function, object etc.) across all module (global).

//3 ways of export a data

// way 1: using module.export.something

module.export.add = (a, b) => a + b;

const sub = (a, b) => a - b;
const div = (a, b) => a / b;

const test = (a, b) => add(a, b) / sub(a, b)

// way2: put the data inside module.export object

module.export = {
  test,
  add
}

// way3: put the data inside a variable, then put the variable module.export.something (object notation)

module.export.add = add;
module.export.test = test;