const express = require('express')

const app = express();

app.get('/about', (req, res)=>{
  res.json({
    name: 'SVGAnimatedBoolean',
    age: 40
  });
})

app.get('/help', (req, res)=>{
  res.send('<h1>I am help page </h1>');
})

app.get('/post', (req, res)=>{
  res.send('<h1>I am post page </h1>');
})


app.get('/', (req, res)=>{
  res.send('<h1>Oneday, we will be two, two will be four....</h1>');
})

app.get('*', (req, res)=>{
  res.send('<h1> error! 404 NOT FOUND </h1>')
})

const PORT = process.env.PORT || 4142;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT} port`)
})