const express = require('express');

const config = require ('./config/app')

const router = require('./router')

const app= express()

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   

app.use(router)

const port= config.addPort

app.listen(port, () => {
    console.log("Server listening on port " + port)
})
