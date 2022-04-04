const express = require('express');
//const res = require('express/lib/response');
const morgan = require('morgan')
const userRouter = require('./router')
const postRouter = require('./postRouter')

const app = express();


app.use('/user', userRouter)
app.use('/post', postRouter)




app.use('/user', (req, res) => {
  res.send('<h1>experiment successful </h2>')
})


app.get('/', (req, res)=>{
  res.send('<h1>Oneday, we will be two, two will be four....</h1>');
})


app.get('/products/:productsid/reviews/:reviewsid', (req, res) => {
  console.log(req.params)
  res.send('<h1>I am under products section </h1>' + req.params.productsid + req.params.reviewsid);
})


app.get('*', (req, res)=>{
  res.send('<h1> error! 404 NOT FOUND </h1>')
})



const PORT = process.env.PORT || 4142;

app.listen(PORT, () => {
  console.log(`app is running on ${PORT} port`)
})
