var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'traceMRP', path: `/${res.path}`})
})

module.exports = router
