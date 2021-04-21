const {Router} = require('express');
const router = Router();

// LIBRERIA PARA HACER PETICIONES A URLS
const fetch = require('node-fetch')

router.get('/' , async (req , res)=>{

    // PETICION.
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // CONVERTIR A FORMATO JSON.
    const users = await response.json();
    console.log(users);

    // RESPONDER
    res.json(users);

});

module.exports = router;