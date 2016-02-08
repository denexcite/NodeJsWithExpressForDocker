var express = require('express')
  , router = express.Router()

// Domestic animals page
router.get('/domestic', function(req, res) {
 // res.send('Cow, Horse, Sheep')
	res.render('animals',  {title: 'Domestic Animals', arr : ['Cows', 'Dogs', 'Sheep']});
})

// Wild animals page
router.get('/wild', function(req, res) {
 // res.send('Cow, Horse, Sheep')
	res.render('animals',  {title: 'Wild Animals', arr : ['Wolf', 'Fox', 'Eagle']});
})

module.exports = router;