const mongoose = require('mongoose');
require('dotenv').config();

//FUNCION para hacer una conexion

const conectarBD = () =>{
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Estamos conectados con mongoBD"))
    .catch((err) => console.error(err));
}

module.exports = conectarBD;