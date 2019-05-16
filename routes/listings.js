const express = require('express');
const router = express.Router();

//listings page
router.get('/', (req,res) =>
  res.render('listings')
);

module.exports = router;
