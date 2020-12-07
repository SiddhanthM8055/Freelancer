const express = require('express');

const router = express.Router();

const {check,validationResult } = require('express-validator');

const MongoClient = require("mongodb").MongoClient;

const url = 'mongodb://localhost:27017/';

router.post(
    '/',
    [
        check('name','Name is required').not().isEmpty(),
        check('email','Please enter a valid email').isEmail(),
        check('password','Please enter a password with 6 or more characters').isLength({min:6})
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
                    if(result){
                        return res.status(400).json({errors:[{msg:'User already exists'}]});
                    }
                    else{
                        var user = {name : req.body.name,email : req.body.email,password : req.body.password};
                        db.collection("LoginInfo").insertOne(user,function(err,result){
                            if(err) throw err;
                            console.log('One document inserted');
                            req._id = result.insertedId;
                            res.status(200).json({_id : result.insertedId});
                        })
                    }
                });
            })
        }
        catch(err){
            res.status(500).send('Server error');
            throw err;
        }
    }
);
module.exports = router;