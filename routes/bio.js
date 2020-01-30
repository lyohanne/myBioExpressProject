var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('bio', { 
      title: 'Hello',
      name: 'Princess Aster',
      address: 'Mengest bet',
      city: 'Addis Ababa',
      country: 'Ethiopia',
      favColor: 'mustard yellow',
      favHobby: 'playing the piano' 
 });
});

module.exports = router;
