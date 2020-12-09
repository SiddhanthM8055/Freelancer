const express = require('express');

const router = express.Router();

const MongoClient = require("mongodb").MongoClient;

const url = 'mongodb://localhost:27017/';

const {check,validationResult } = require('express-validator');

var ObjectId = require('mongodb').ObjectId;

const auth = require('../../middleware/authenticate');

router.get('/me',auth, (req,res) => {
    try {
        MongoClient.connect('mongodb://localhost:27017/',{useUnifiedTopology:true}, function(err,client){
            if(err) throw err;
            const db = client.db('FreeLancerProject');
            db.collection("ProfileInfo").findOne({userId:req._id},function(err,result){
                if(err) throw err;
                const profile = result;
                if(!profile){
                    return res.status(400).json({msg:'There is no profile for this user'});
                }
                res.json(profile);
            })
        })
    }
    catch(err) {
        res.status(500).send('Server error');
        throw err;
    }
});

router.post(
    '/',
    [
        auth,
        [
            check('status','Status is required').not().isEmpty(),
            check('skills','Skills is required').not().isEmpty()
        ]
    ],
    (req,res) => {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors : errors.array()});
            }
            const profileFields = {};
            profileFields.userId = req._id;
            if(req.body.skills)
                profileFields.skills = req.body.skills.split(',').map(skill => skill.trim());
            if(req.body.status)
                profileFields.status = req.body.status;
            if(req.body.company)
                profileFields.company = req.body.company;
            if(req.body.githubusername)
                profileFields.githubusername = req.body.githubusername;
            if(req.body.bio)
                profileFields.bio = req.body.bio;
            if(req.body.website)
                profileFields.website = req.body.website;
            if(req.body.location)
                profileFields.location = req.body.location;
            if(req.body.education)
                profileFields.education = req.body.education;
            if(req.body.experience)
                profileFields.experience = req.body.experience;
            if(req.body.contacts)
                profileFields.contacts = req.body.contacts;
            MongoClient.connect('mongodb://localhost:27017/',{useUnifiedTopology:true}, function(err,client){
                if(err) throw err;
                const db = client.db('FreeLancerProject');
                db.collection("ProfileInfo").updateOne(
                    {userId:req._id},
                    {$set:profileFields},
                    {upsert:true},
                    function(err,result){
                        if(err) throw err;
                        console.log("One document created/updated in ProfileInfo");
                        db.collection("ProfileInfo").findOne({userId:req._id},function(err,result1){
                            if(err) throw err;
                            res.json(result1);
                        })
                    }
                );
            })
        }
        catch(err) {
            res.status(500).send('Server error');
            throw err;
        }
    }
);

router.get('/',(req,res)=>{
    try {
        MongoClient.connect('mongodb://localhost:27017/',{useUnifiedTopology:true},function(err,client){
            if(err) throw err;
            const db = client.db('FreeLancerProject');
            db.collection("ProfileInfo").find({}).toArray(function(err,result){
                if(err) throw err;
                result.map((item)=>{
                    db.collection("LoginInfo").findOne(ObjectId(item.userId),function(err,result1){
                        if(err) throw err;
                        item.email = result1.email;
                        item.name = result1.name;
                    })
                });
            setTimeout(()=>res.json(result),100);
            })
        })
    }
    catch(err) {
        res.status(500).send('Server error');
        throw err;
    }
});

router.get('/user/:user_id',(req,res)=>{
    try {
        MongoClient.connect('mongodb://localhost:27017/',{useUnifiedTopology:true}, function(err,client){
            if(err) throw err;
            const db = client.db('FreeLancerProject');
            db.collection("ProfileInfo").findOne({userId:req.params.user_id},function(err,result){
                if(err) throw err;
                db.collection("LoginInfo").findOne(ObjectId(result.userId),function(err,result1){
                    if(err) throw err;
                    result.email = result1.email;
                    result.name = result1.name;
                    res.json(result);
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