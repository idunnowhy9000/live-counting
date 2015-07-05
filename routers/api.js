var express = require('express');
var passport = require('passport');
var User = require('../models/User');

var router = express.Router();

router.get('/user/:name', function (req, res) {
    User.find({ username: req.name }).exec(function (err, user) {
        if (err) {
            res.send({ error: 'User does not exist' });
        } else {
            res.send(user);
        }
    });
});

router.post('/register', function (req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
        if (err) {
            res.send({ error: 'Error while registering' });
        } else {
            res.send({});
        }
    });
});

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.send({});
});

router.get('/logout', function (req, res) {
    req.logout();
    res.send({});
});

module.exports = router;
