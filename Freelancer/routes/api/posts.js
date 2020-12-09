const express = require('express');

const router = express.Router();

const {check,validationResult } = require('express-validator');

const MongoClient = require("mongodb").MongoClient;

const url = 'mongodb://localhost:27017/';

var ObjectId = require('mongodb').ObjectId;

const auth = require('../../middleware/authenticate');

router.post(
    '/',
    [
        auth,
        [
            check('title','Title is required').not().isEmpty(),
            check('description','Description is required').not().isEmpty(),
            check('deadline','Deadline is required').not().isEmpty(),
            check('money','Payment amount is required').not().isEmpty(),
            check('skills','Skills is required').not().isEmpty()
        ]
    ],
    (req,res) => {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors:errors.array()});
            }
            MongoClient.connect('mongodb://localhost:27017/',{useUnifiedTopology:true}, function(err,client){
                if(err) 
                    throw err;
                const db = client.db('FreeLancerProject');
                db.collection("LoginInfo").findOne(ObjectId(req._id),function(err,result){
                    const newPost = {
                        title : req.body.title,
                        date : new Date(),
                        deadline : req.body.deadline,
                        description : req.body.description,
                        money : req.body.money,
                        skills : req.body.skills.split(',').map(skill => skill.trim()),
                        userId : req._id,
                        name : result.name,
                        email : result.email
                    }
                    db.collection("PostsInfo").insertOne(newPost,function(err,result){
                        if(err) throw err;
                        console.log('One post info inserted');
                    });
                    res.json(newPost);
                })
            })
        }
        catch(err) {
            res.status(500).send('Server error');
            throw err;
        }
    }
);

router.get('/',auth,(req,res) =>{
    try {
        MongoClient.connect('mongodb://localhost:27017/',{useUnifiedTopology:true},function(err,client){
            if(err) throw err;
            const db = client.db('FreeLancerProject');
            db.collection("PostsInfo").find({}).toArray(function(err,result){
                if(err) throw err;
                result.sort(function(a,b){
                    return new Date(b.date) - new Date(a.date);
                });
                res.json(result);
            })
        })
    }
    catch(err) {
        res.status(500).send('Server error');
        throw err;
    }
});

router.get('/:id',auth,(req,res) =>{
    try {
        MongoClient.connect('mongodb://localhost:27017/',{useUnifiedTopology:true},function(err,client){
            if(err) throw err;
            const db = client.db('FreeLancerProject');
            db.collection("PostsInfo").findOne({userId:req.params.id},function(err,result){
                if(err) throw err;
                res.json(result);
            })
        })
    }
    catch(err) {
        res.status(500).send('Server error');
        throw err;
    }
});

router.delete('/:id',auth,(req,res) =>{
    try {
        MongoClient.connect('mongodb://localhost:27017/',{useUnifiedTopology:true},function(err,client){
            if(err) throw err;
            const db = client.db('FreeLancerProject');
            db.collection("PostsInfo").findOne({userId:req.params.id},function(err,result){
                if(err) throw err;
                if(!result){
                    return res.status(401).json({msg:'Post not found'});
                }
                if(result.userId != req._id){
                    return res.status(401).json({msg:'Authorization error'});
                }
                db.collection("PostsInfo").deleteOne({userId:req.params.id},function(err){
                    if(err) throw err;
                    console.log("One post removed");
                    res.json({msg:'Post removed'});
                })
            })
        })
    }
    catch(err) {
        res.status(500).send('Server error');
        throw err;
    }
});

module.exports = router;