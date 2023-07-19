const mongoose =require('mongoose');

module.exports = mongoose.model('Employee', {
    fullname: String,
    position: String,
    location: String,
    salary: Number,
})