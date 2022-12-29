require('dotenv').config();
const mongoose = require('mongoose');
const URL = process.env.MONGOATLAS ? process.env.MONGOATLAS : 'mongodb+srv://LexPrimen:<4ARKevU2cJJWlyao>@cluster0.njdl4vq.mongodb.net/?retryWrites=true&w=majority' ;

const conexion = mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




mongoose.connection.on('connected', () =>{
    console.log(`Conexión a la Database correcta - URL: ${URL}`);
});

mongoose.connection.on('error', () =>{
    console.log(`Conexión a la Database NO encontrada - URL: ${URL}`);

})

module.exports = conexion;







