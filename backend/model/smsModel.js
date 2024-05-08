const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const smsSchema = new Schema({
    requirement: String,
    name: String,
    email: String,
    countryNumber: Number,
    phone: Number,
    createdAt: Date
})

const SMS = mongoose.model('SMS', smsSchema);
module.exports = SMS