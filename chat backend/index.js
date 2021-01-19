const express = require('express');
const app= express()

const port=3000

app.get('/login',(req,res) =>{
   return res.send('login Screen works now')
} )

app.listen(port, () => {
    console.log("Server listening on port " + port)
})

console.log('Hello World')