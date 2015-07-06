var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String },
    
    posts: [{ type: String }], // post ids
    gets: [{ type: String }], // post ids
    getsNum: [{ type: Number }] // number of gets
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);