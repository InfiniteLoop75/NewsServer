const express = require('express');
const {News} = require('../model/news');
const adminRouter = express.Router();
adminRouter.get('/', (req, res)=>{
    News.find({}).sort({date: -1}).exec((err, foundNews)=>{
        
        if(!err){
            res.render('index', {newsData: foundNews});
        }else{
            res.send(err);
        }
    });
});
adminRouter.get('/new',(req, res)=>{
    res.render('new');
});
adminRouter.post('/', (req, res)=>{
    
    var news = {
        title: req.body.title,
        banner: req.body.banner,
        text: req.body.text
    };
    News.create(news, (err, createdNews)=>{
        if(err){
            res.send(err);
        }else{
            res.redirect('/admin');
        }
    });
});
adminRouter.get('/:id/edit', (req, res)=>{
    News.findById(req.params.id, (err, found)=>{
        res.render('edit', {news: found});
    });

});
adminRouter.put('/:id', (req, res)=>{
    var news = {
        title: req.body.title,
        banner: req.body.banner,
        text: req.body.text
    };
    News.findByIdAndUpdate(req.params.id, news, (err, edited)=>{
        if(err){
            res.send(err);
        }else{
            res.redirect('/admin');
        }
    });
});
adminRouter.delete('/:id', (req, res)=>{
    News.findByIdAndRemove(req.params.id, (err)=>{
        res.redirect('/admin');
    });
});
module.exports = {
    adminRouter
};