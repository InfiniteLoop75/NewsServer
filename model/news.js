const mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
    title: String,
    text: String,
    date: {type: Date, default: new Date()},
    banner: String

});
var News = mongoose.model('news', NewsSchema);
module.exports = 
{
    News
}