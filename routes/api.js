const express = require('express');
const {News} = require('../model/news');
const apiRouter = express.Router();
apiRouter.get('/', (req, res)=>{
    News.find({}).sort({date: -1}).exec((err, foundData)=>{
        var newsObject= {
            author: 'Ibrokhimjon Saydakhmatov',
            status: res.statusCode,
            data: foundData,
            adminPanel: `http://localhost:3000/admin`
        };
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).json(newsObject);
        }
    });
});
apiRouter.get('/:id', (req, res)=>{

    News.findById(req.params.id, (err, foundNews)=>{
        var newsObject= {
            author: 'Ibrokhimjon Saydakhmatov',
            status: res.statusCode,
            news: foundNews
        };
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).json(newsObject);
        }
    });
});
module.exports = {
    apiRouter
};