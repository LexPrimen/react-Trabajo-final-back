
const express = require ('express');
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT ;
const path = require('path')
const nodemailer = require('nodemailer')
require('./database/conexion')
const morgan = require('morgan');

const app = express();
const personaController = require('./controllers/personaController')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(morgan('common'));


app.get('/datos', async (req,res)=>{
    res.json({
       personas: await personaController.findAll()
    });
});

//CONFIGURAR MULTER
// const storage = multer.diskStorage({
//     destination: function (req,file, callback) {
//         callback(null,'uploads')
//         console.log(file); 
//         },
//         filename: function(req,file,callback){
//             callback(null, `${file.originalname}`)
        
                  
//     }
// })

// const uploads = multer({ storage: storage})

// app.post('/crear', async (req,res)=>{
//     const {nombre,apellido,dni} = req.body;
//     console.log(`${nombre} ${apellido} ${dni}`);
//     await personaController.create(req.body)

//     res.send('Persona creada')
// })
app.delete('/:id', (req,res)=>{
    res.send('Persona eliminada')
})
app.put('/:id', (req,res)=>{
    res.send('Persona actualizada')
});

// app.get('/subir', (req,res)=>{
//     res.sendFile('index')
// })

// app.post('/subir', uploads.single('miArchivo') , (req,res, next)=>{
//   const file = req.file;
//   res.send(`Archivo ${file.originalname} subido correctamenete `)
// });

app.listen(PORT, ()=>{
   console.log(`servidor Trabajando en el ${PORT}`)

});









app.post('/crear', async (req,res)=>{
    const {usuario,contraseña,email} = req.body;
    console.log(`${usuario} ${contraseña} ${email} `);
     
      await personaController.create(req.body) 
  
      if (usuario == '' || email == ''){
        
        
        
    
  
     } else{

  
  
     console.log(usuario),
     console.log(email);
  
      async function envioMail(){
  
       let transporter = nodemailer.createTransport({
           host: 'smtp.gmail.com',
           port: 465,
           secure: true,
           auth: {
               user: `${process.env.EMAIL}`,
               pass: `${process.env.PASSWORDEMAIL}`,
           }
       });
        
       let envio = await transporter.sendMail({
           from: process.env.EMAIL,
           to: `${email}`,
           subject: 'Gracias por Suscribirse a nuestra pagina web',
           html: `Dudas y consultas envie un email <br>
           Saludos `
       });
      }
      envioMail();
    }      
  })
  
  
  // app.post('/crearpublicacion', function(req, res) {
  //     console.log(req.files.imagen); // the uploaded file object
  //   });
  
    app.get('/datos', async (req,res)=>{
      res.json({
        Registro: await personaController.findAll()
      });
  });


  
  app.post('/crear', async(req,res)=>{
    const {usuario,contraseña,email} = req.body;
    console.log(`${usuario}  ${contraseña} ${email} `);
  
    await personaController.create(req.body) 
     
    
  })


