// way of import file path from global module

const path = require('path');

const myCurrentPath = __filename;

// different way of working with file directory:


console.log(path.basename(myCurrentPath));

console.log(path.extname(myCurrentPath))

let pathObj = {
  dir: 'usr/localStorage',
  name: 'testFile',
  ext: '.js'
}

console.log(path.format(pathObj));

console.log(path.isAbsolute(myCurrentPath));
console.log(path.isAbsolute('.learning/exports.js'));

console.log(path.join(':c', 'local', 'user', 'sabit', 'atta.js'));

console.log(path.resolve(__dirname, 'past', 'jsj.js'))

console.log(path.parse(myCurrentPath));