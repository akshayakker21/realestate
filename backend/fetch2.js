

var express = require('express');
var bodyParser = require('body-parser');

let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let fetch2  = express.Router().get("/",(req,res)=>{
        talentsprint.connect("mongodb://localhost:27017/livinestate",(err,db)=>{
            if(err){
                throw err;
            }
            else{
                console.log('fetch called...');
                db.collection("card").find({}).toArray((err,array)=>{
                    if(err){
                         throw err;
                    }
                    else{
                        if(array.length > 0){
                            res.send(array); //data will be sent to client (browser or Angular)                   
                        } else {
                            res.send({message:"Record Not Found..."});
                        }
                    }
                });
            }
        });
});
module.exports = fetch2;