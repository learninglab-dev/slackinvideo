var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ShootSchema = new Schema({
    shootId: String,
    shootJson: String},
    {strict: false});

var Shoot = mongoose.model('Shoot', ShootSchema );

module.exports = mongoose.model('Shoot', ShootSchema );
