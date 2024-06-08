const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    contat: Number,
    email: String,
    address: String,
    prduct: String,
    quantity: Number,

});

module.exports = mongoose.model('User',userSchema);