const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const personaSchema= new Schema({
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

const Persona = mongoose.model('persona', personaSchema)

module.exports = Persona;