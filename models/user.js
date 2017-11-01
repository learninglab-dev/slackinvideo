var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    last_name: String,
    first_name: String,
    user_id: String,
    title: String
});

var UserModel = mongoose.model('UserModel', UserSchema );

module.exports = mongoose.model('UserModel', UserSchema );
