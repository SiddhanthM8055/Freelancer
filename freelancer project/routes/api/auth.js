const express = require('express');

const router = express.Router();

const {check,validationResult } = require('express-validator');

const MongoClient = require("mongodb").MongoClient;

const url = 'mongodb://localhost:27017/';

var ObjectId = require('mongodb').ObjectId;

const auth = require('../../middleware/authenticate');

router.get('/',auth,(req,res) => {
    try {
        MongoClient.connect('mongodb://localhost:27017/',{useUnifiedTopology:true}, function(err,client){
            if(err) 
                throw err;
            const db = client.db('FreeLancerProject');
            db.collection("LoginInfo").findOne(ObjectId(req._id),function(err,result){
                if(err) throw err;
                res.json(result);
            })
        });
    }
    catch(err){
        res.status(500).send('Server error');
        throw error;
    }
});

router.post(
    '/',
    [
        check('email','Please enter a valid email').isEmail(),
        check('password','Password is required').exists()
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
                var query = { email : req.body.email };
                db.collection("LoginInfo").findOne(query,function(err,result){
                    if(err)
                        throw err;
                    //console.log(result);
                    if(!result){
                        return res.status(400).json({errors:[{msg:'Invalid credentials'}]});
                    }
                    else{
                        if(result.password != req.body.password){
                            return res.status(400).json({errors:[{msg:'Invalid credentials'}]});
                        }
                        req._id = result._id;
                        res.status(200).json({_id : result._id});
                    }
                });
            })
        }
        catch(err) {
            res.status(500).send('Server error');
            throw err;
        }
    }
);

module.exports = router;