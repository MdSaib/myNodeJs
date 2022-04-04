const router = require('express').Router();

router.get('/aaa/:postid', (req, res) => {
  res.send('<h1> experimenting router post Id</h1>')
})

router.get('/login', (req, res) =>{
  res.send('<h1>I am login route </h1>')
})

router.get('/signup', (req,res) => {
  res.send('<h1>I am signup route')
})

router.get('/logout', (req, res) => {
  res.send('<h1>I am logout route </h1>')
})

module.exports = router;