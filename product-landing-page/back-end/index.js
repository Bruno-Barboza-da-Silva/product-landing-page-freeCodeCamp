// import express from 'express'; 
const express = require('express')
// import session from 'express-session'; 
// import fileUpload from 'express-fileupload'; 
// import fs from 'fs' 
// import cors from 'cors' 
const cors = require('cors')
// import path from 'path' 
const app = express();
const contactRouter = require('./routes/contactUs.router')



app.use(express.json());
app.use(cors())


let json = []

app.get('/all-clients', (req, res) => {
    res.json(json)
})

// app.post('/contact-us', (req, res) => {
//     console.log(req.body)
//     json.push(req.body)
    
// })

app.get('/contact-us', (req, res) => {
    res.json(json[json.length-1])
})


app.use("/contact-us", contactRouter);


app.listen(5000, ()=>{
    console.log("aplicação rodando na porta 5000")
})
