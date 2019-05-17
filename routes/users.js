const express = require('express');
const router = express.Router();

//login page
router.get('/login', (req,res) =>
  res.render('login')
);

router.post('/register', function (req, res) {
  // On signup redirect to homepage
  res.redirect('/')
})

module.exports = router;
