var express = require('express');
var passport = require('passport');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { user: req.user });
});

module.exports = router;