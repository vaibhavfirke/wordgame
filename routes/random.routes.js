const express=require('express');
const WordRoute=express.Router();

WordRoute.get("/",async(req,res)=>{
    try{
        const words=["Apple",
        "Banana",
        "Cherry",
        "Durian",
        "Elderberry",
        "Fig",
        "Grape",
        "Honeydew",
        "Kiwi",
        "Lemon",
        "Mango",
        "Orange",
        "Pineapple",
        "Quince",
        'Raspberry',
        "Strawberry",
        "Tangerine",
        "Ugli fruit",
        "Vanilla bean",
        "Watermelon"];
        const word=await Math.floor(Math.random()*words.length) ;
        const ans=words[word]
        res.send({Word:ans})

    }catch(err){
        res.send({"msg":err})
    }
})
module.exports={WordRoute}