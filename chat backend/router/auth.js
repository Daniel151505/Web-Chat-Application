const router = require('express').Router()


    router.get('/login',(req,res) =>{
       return res.send('login Screen works now')
    } )

    router.get('/register',(req,res) =>{
        return res.send('Register Screen works now')
     } )

    
    
    module.exports = router

