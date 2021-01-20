const router = require('express').Router()


    router.post('/login',(req,res) =>{
       return res.send(['Login' , req.body])
    } )

    router.post('/register',(req,res) =>{
        return res.send('Register Screen works now')
     } )

    
    
    module.exports = router

