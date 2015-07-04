var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
    username: String,
    password: String,
    gets: [{ type: String, default: 0 }],
    getNum: { type: Number, default: 0 }
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);