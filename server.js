const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const {adminRouter} = require('./routes/admin');
const {apiRouter} = require('./routes/api');
const {db} = require('./db/dbconfig');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use('/admin', adminRouter);
app.use('/api', apiRouter);

app.get('/', (req, res)=>{
    res.redirect('/api/');
});


app.listen(3000,()=>{
    console.log("Server is up at PORT 3000")
});