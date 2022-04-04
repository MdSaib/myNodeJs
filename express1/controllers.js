exports.getAllPost = (req, res) => {
  console.log(req.query) 
  res.send('<h1>Render all post</h1>')
}

exports.createNewPost = (req, res) =>{
  res.send('<h1>Render all post</h1>')
}