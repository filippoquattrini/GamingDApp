const express = require('express');
const path = require("path");
const router = express.Router();
router.use(express.static('public'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/HomePage.html'));

});

module.exports = router;
