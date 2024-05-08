const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emailSchema = new Schema({
    product: String,
    estQuantity: String,
    unitType: String,
    requirement: String,
    name: String,
    email: String,
    countryNumber: Number,
    phone: Number,
    // timestamps: true

})

const Email = mongoose.model('Email', emailSchema);
module.exports = Email