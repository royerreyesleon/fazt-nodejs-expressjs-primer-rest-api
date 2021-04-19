const {Router} = require('express');
const router = Router();

router.get('/' , (req , res)=>{
    // res.send('hello from simple server :)')
    res.json({
    "title":"Hola mundo"
    })

})

router.get('/test' , (req , res)=>{
    // res.send('hello from simple server :)')
    const data = {
        "test":"test"
    };

    res.json(data)

})

module.exports = router;