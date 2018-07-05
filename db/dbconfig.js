const db = require('mongoose');
db.connect('mongodb://localhost:27017/newsapi');
module.exports = {
    db
};
