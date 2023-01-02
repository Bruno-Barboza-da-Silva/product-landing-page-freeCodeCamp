// import express from 'express'; 
const express = require('express')
// import session from 'express-session'; 
// import fileUpload from 'express-fileupload'; 
// import fs from 'fs' 
// import cors from 'cors' 
const cors = require('cors')
// import path from 'path' 
const app = express()

app.use(express.json());
app.use(cors())


app.get('/api', (req, res) => {
    res.json({'titulo':'Uma notícia'})
})

app.post('/api', (req, res) => {
    console.log(req.body)
    json.push(req.body)


})


app.listen(5000, ()=>{
    console.log("aplicação rodando")
})
