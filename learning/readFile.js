// filesystem: this is being used to work with files 

// here I have read (extract) data from test.json file  using fs.readFile() method

const { info } = require('console')
const fs = require('fs')

fs.readFile('./test.json', (err, info) => {
  if (err) {
    return console.log(err)
  } else {
    console.log(info);
    // because of buffer data is not human readable, so below I changed it into a javascript type object using JSON.parse method
    let jsTypeInfo = JSON.parse(info)
    console.log(jsTypeInfo)
  }
})
