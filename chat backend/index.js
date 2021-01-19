const express = require('express');

const config = require ('./config/app')

const app= express()

app.get('/home',(req,res) =>{
    return res.send('Home screen')
 } )

app.get('/login',(req,res) =>{
   return res.send('login Screen works now')
} )

const port= config.addPort

app.listen(port, () => {
    console.log("Server listening on port " + port)
})

console.log('Hello World')