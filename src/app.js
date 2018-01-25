const express = require('express');
const app = express();


const morgan = require('morgan');
const bodyParser = require('body-parser');

//settings
app.set('port', process.env.PORT || 5000 );


//middlewares
app.use(morgan('dev'));
//para poder entender las peticiones de los usuarios de json
app.use(bodyParser.json());


//rutas
require('./rutas/rutasUsuarios')(app);




app.listen(app.get('port'), () => {

console.log('server on port:', process.env.PORT);
});


