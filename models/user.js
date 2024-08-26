// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    password: { type: String, required: true },
    price: { type: String, required: false },
    unit: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);