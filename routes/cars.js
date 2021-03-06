var express = require('express')
  , router = express.Router()

// Car brands page
router.get('/brands', function(req, res) {
  res.render('cars', {title: 'Car Brands', brands : ['Audi', 'BMW', 'Mercedes', 'Honda']})
})

// Car brands page
router.get('/models', function(req, res) {
  res.render('cars', {title: 'Car Models', brands : ['Audi Q7', 'BMW X5', 'Mercedes GL', 'Honda HRV']})
})


module.exports = router;