const router = require('express').Router();

const {
  getAllPost,
  createNewPost
} = require('./controllers')



router.get('/', getAllPost)

router.post('/', createNewPost)

module.exports = router;