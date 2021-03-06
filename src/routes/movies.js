const { Router } = require("express");
const router = Router();

// LIBRERIA PARA HACER CICLOS.
const _ = require('underscore')

// TRAER LOS DATOS DEL ARCHIVO JSON
const movies = require('../sample.json');



// router.get('/movies' , (req , res)=>{
// http://localhost:3002/api/movies
router.get('/' , (req , res)=>{

//    res.send('hello from simple server :)')
   res.json(movies);

})


/*
http://localhost:3002/api/movies
Content-Type application/json
{
    "director":"Royer",
    "title":"adas",
    "year":"2020",
    "rating":"10"
}
*/
router.post('/' , (req , res)=>{
    console.log(req.body);
    const {title, director, year, rating} = req.body;
    
    if (title && director && year && rating) {
        const id = movies.length + 1;
        const newMovie = {...req.body, id};
        movies.push(newMovie);
        
        // res.send('Recibido')
        res.json(movies);
        
    }else{
        // res.send('Todos los campos son requeridos');
        res.status(500).json({error: "Todos los campos son requeridos"});
    }

})



// http://localhost:3002/api/movies/3
router.delete('/:id' , (req , res)=>{

    const {id} = req.params;

    // recorres el arreglo de datos
    _.each(movies, (movie, i) => {
        // si el id que recorre es igual al id param eliminar
        if (movie.id == id) {
            // eliminar solo uno
            movies.splice(i, 1);
        }
    })
//    res.send('Eliminado')
   res.send(movies)

});



/*
http://localhost:3002/api/movies/1
Content-Type application/json
{
    "director":"Royer",
    "title":"adas",
    "year":"2020",
    "rating":"10"
}
*/
router.put('/:id' , (req , res)=>{
    const {id} = req.params;
    const {title, director, year, rating} = req.body;

    if (title && director && year && rating) {

        _.each(movies, (movie, i) => {
            // si el id que recorre es igual al id param eliminar
            if (movie.id == id) {
                // actualizar
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
                
            }
        })

        res.json(movies);
        
    }else{
        // res.send('Todos los campos son requeridos');
        res.status(500).json({error: "Todos los campos son requeridos"});
    }


   res.send('hello from simple server :)')

})

module.exports = router;