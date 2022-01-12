const express = require("express")
const path = require("path")
const app = express();
const bodyparser = require("body-parser")
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/krishna")
const port = 80;
const fs = require("fs")
const ejs = require("ejs");
// Defining static file
app.use("/static",express.static('static'))
// Defining View Engine
app.set('view engine','html')
// Defining Views
app.set('viwes',path.join(__dirname,'views'))
app.engine('html', require('ejs').renderFile);
app.use(express.urlencoded())

//  Setting schema for database
const contactusschema = new mongoose.Schema({
    Name:String,
    age:Number,
    mobile:Number,
    emailid:String,
    message:String
})
// Setting model for schema
const contact = mongoose.model("Contacted",contactusschema)

// Getting webpages for all html files
app.get("/",(req,res)=>{
    res.status(200).render("index")
})
app.get("/index.html",(req,res)=>{
    res.status(200).render("index")
})
app.get("/aboutus.html",(req,res)=>{
    res.status(200).render("aboutus.html")
})
app.get("/contactus.html",(req,res)=>{
    res.status(200).render("contactus.html")
})
app.get("/universalform.html",(req,res)=>{
    res.status(200).render("universalform.html")
})
app.get("/damodarlila.html",(req,res)=>{
    res.status(200).render("damodarlila.html")
})
app.get("/dhenukasura.html",(req,res)=>{
    res.status(200).render("dhenukasura.html")
})
app.get("/bakasura.html",(req,res)=>{
    res.status(200).render("bakasura.html")
})
app.get("/aghasura.html",(req,res)=>{
    res.status(200).render("aghasura.html")
})
app.get("/kidnapped.html",(req,res)=>{
    res.status(200).render("kidnapped.html")
})
app.get("/kaliya.html",(req,res)=>{
    res.status(200).render("kaliya.html")
})
app.get("/putana.html",(req,res)=>{
    res.status(200).render("putana.html")
})
app.get("/contacted.html",(req,res)=>{
    res.status(200).render("contacted.html")
})
// Getting Data From The User
app.post("/contactus.html",(req,res)=>{
    var contactData = new contact(req.body);
    contactData.save().then(()=>{
        res.render("contacted.html")
    }).catch((e)=>{
        res.status(200).send(`${e}`)
    })
})
// Opening the webpage with the port defined before
app.listen(port,()=>{
    console.log("The website is opened at port 80")
})