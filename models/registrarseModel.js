const mongoose = require('mongoose');
const {Schema} = require('mongoose');


const registrarSchema= new Schema({
    usuario:{
        type: 'string', 
        required: true
     },
     contraseña:{
        type: 'string', 
        required: true
     },
     email:{
        type: 'string', 
        required: true
     },

})

module.export = mongoose.model('Registro', registrarSchema)