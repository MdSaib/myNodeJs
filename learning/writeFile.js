// filesystem: this is being used to work with files 

// here I have created anew file test.json using fs.writeFile method


const fs = require('fs')

const testObj = {
  name: 'md saib',
  email: 'mdsaib45@gmail.com',
  address: {
    city: 'B-baria',
    country: 'BD'
  }
}

const info = JSON.stringify(testObj);

fs.writeFile('test.json', info, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('writing file success')
  }
})