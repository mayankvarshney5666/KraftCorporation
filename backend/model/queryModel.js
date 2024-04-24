const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Defining Schema
// const querySchema = new Schema({
//     product: {
//         type: String,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     country: {
//         type: String,
//         required: true
//     },
//     phoneNumber: {
//         type: Number,
//         required: true,
//         length: 10
//     },
//     message: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// Define Schema
const querySchema = new Schema({
    product: { type: String, },
    name: String,
    email: String,
    phone: String,
    message: String,
    country: String,
    createdAt: Date
});

// Define Model
const Query = mongoose.model('Query', querySchema);


module.exports = Query;