let express = require('express');
let mongodb =require('mongodb')
let mongoclient = mongodb.MongoClient;

let register = express.Router().post("/",function(req,res){
    mongoclient.connect('mongodb://localhost:27017/livinestate',(err,db)=>{


if(err){
            throw err

        }else{ 
            
                db.collection("logindetails").insertOne({email:req.body.email,password:req.body.password,address:req.body.address,address2:req.body.address2,city:req.body.city,state:req.body.state,zip:req.body.zip},(err,data)=>{

                if(err){
                    throw err
                }else{
                    res.send(data)
                }
            })
        }
    })

})
module.exports = register