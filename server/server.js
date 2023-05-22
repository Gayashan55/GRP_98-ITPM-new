const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;



//connection to mongo DB
mongoose.connect(URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB Connection Success!");
})


app.listen(PORT, () => {
	console.log(`Server is up and running on Port: ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send('Hello Node API')
})
///////// ADMIN_1 ////////
//____Complain Manage Data_____//
//SEND TO DB
const Complain_Manage = require('./Admin1/Complain Manage/complainmanageModel')
app.post('/CM',async(req,res)=>{
    // console.log(req.body);
    // res.send(req.body)
    try{
        const cm = await Complain_Manage.create(req.body)
        res.status(200).json(cm);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
//Read DATA
app.get('/CM',async(req,res)=>{

    try{
        const cm = await Complain_Manage.find({})
        res.status(200).json(cm);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Read DATA By ID
app.get('/CM/:id',async(req,res)=>{

    try{
        const {id}= req.params;
        const C_M = await Complain_Manage.findById(id)
        res.status(200).json(C_M);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// Update Or Edit
app.put('/CM/:id',async(req,res)=>{

    try{
        const {id}= req.params;
        const C_M = await Complain_Manage.findByIdAndUpdate(id,req.body);
        if(!C_M){
            return res.status(404).json({message:`canot find any C_M with ID ${id}`})

        }
        const updatedCM =await Complain_Manage.findById(id)
        res.status(200).json(updatedCM);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
//Delete Data
app.delete('/CM/:id',async(req,res)=>{

    try{
        const {id}= req.params;
        const C_M = await Complain_Manage.findByIdAndDelete(id);
        if(!C_M){
            return res.status(404).json({message:`canot find  C_M with ID to Delete ${id}`})

        }
       
        res.status(200).json(C_M);

    }catch (error){
    
        res.status(500).json({message: error.message})
    }
})
//_____Get Data incomplain_____
const complain_m = require('./Admin1/GetComplain/getcomplainModel')
app.get('/CMGD',async(req,res)=>{

    try{
        const cm = await  complain_m.find({})
        res.status(200).json(cm);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
//Serch Data
app.get("/CM/search/:key",async(req,resp)=>{
   
   // resp.send("Serch Done");
    let data = await Complain_Manage.find(

        {
            "$or":[
                {complainid:{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);
})




//____Manage Garbage Bin_____//
//SEND TO DB
const bin_manage = require('./Admin1/Manage Garbage Bin/managegarbagebinmodel')
app.post('/BM',async(req,res)=>{

    try{
        const BM = await bin_manage.create(req.body)
        res.status(200).json(BM);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Read DATA
app.get('/BM',async(req,res)=>{

    try{
        const BM = await bin_manage.find({})
        res.status(200).json(BM);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Read DATA By ID
app.get('/BM/:id',async(req,res)=>{

    try{
        const {id}= req.params;
        const BM = await bin_manage.findById(id)
        res.status(200).json(BM);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

// Update Or Edit
app.put('/BM/:id',async(req,res)=>{

    try{
        const {id}= req.params;
        const BM = await bin_manage.findByIdAndUpdate(id,req.body);
        if(!BM){
            return res.status(404).json({message:`canot find any BM with ID ${id}`})

        }
        const updatedBM =await bin_manage.findById(id)
        res.status(200).json(updatedBM);

    }catch (error){
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})
//Delete Data
app.delete('/BM/:id',async(req,res)=>{

    try{
        const {id}= req.params;
        const BM = await bin_manage.findByIdAndDelete(id);
        if(!BM){
            return res.status(404).json({message:`canot find  BM with ID to Delete ${id}`})

        }
       
        res.status(200).json(BM);

    }catch (error){
    
        res.status(500).json({message: error.message})
    }
})

