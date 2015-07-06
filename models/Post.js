var mongoose = require('mongoose');

var Post = new mongoose.Schema({
    author: { type: String },
    text: { type: String },
    number: { type: Number }
});

module.exports = mongoose.model('User', Post);