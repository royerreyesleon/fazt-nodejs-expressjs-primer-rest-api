const {Router} = require('express');
const router = Router();

// http://localhost:3002/
router.get('/' , (req , res)=>{
    // res.send('hello from simple server :)')
    res.json({
    "title":"Hola mundo"
    })

})



// http://localhost:3002/test
router.get('/test' , (req , res)=>{
    // res.send('hello from simple server :)')
    const data = {
        "test":"test"
    };

    res.json(data)

})

module.exports = router;