var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    ts: String,
    timestamp: Date,
    user_id: String,
    user_name: String,
    text: String
});

var MessageModel = mongoose.model('MessageModel', MessageSchema );

module.exports = mongoose.model('MessageModel', MessageSchema );
