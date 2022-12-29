const Registro = require('../models/registrarseModel');




class registrarseController {

    async findAll(){
        try{
            return await Registro.find().lean();

        }catch(error){
            throw error
        }
    }




    

async create(registro){
    try{

        
        return await Registro.create(registro);
      
    }catch(error){
        throw error
    }
}
};

module.exports = new registrarseController;