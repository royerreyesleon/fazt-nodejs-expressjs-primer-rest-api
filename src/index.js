const express = require('express')
const app     = express();
const morgan  = require('morgan');


// require('dotenv').config()
// const port = process.env.PORT || 3002;
app.set('port', process.env.PORT || 3002)
app.set('json spaces', 2);

// MORGAN ES UN MIDDLEWARE, ES UNA FUNCION QUE PROCESA DATOS ANTES QUE EL SERVIDOR LOS RECIBA
// MIDDLEWARES
app.use(morgan('dev'));

// DECIRLE AL SERVIDOR QUE PUEDA RECIBIR DATOS DE FORMULARIOS NO PESADOS, (NO IMAGENES NI VIDEOS)
app.use(express.urlencoded({extended: false}));
// DECIRLE AL SERVIDOR QUE PUEDA RECIBIR FORMATOS JSON Y ENTENDERLOS
app.use(express.json());

// RUTAS
app.use(require('./routes/routes'));
// app.use(require('./routes/movies'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));

// INICIANDO EL SERVIDOR
// app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))
app.listen(app.get('port') , ()=> console.log('> Server is up and running on port : ' + app.get('port')))