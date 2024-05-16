// index.js
const express = require('express');
const conectarBD = require('../config/db');
const cors = require('cors');

// Configuración de Express y puerto
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// Aquí van las rutas de los módulos
app.use('/ApiBiblioteca/libros', require('../routes/RoutesLibro'));

// Enlazamos la conexión de la base de datos
conectarBD();
app.use(cors());

// Se configura el puerto que va a tener nuestro servidor
app.listen(port, () => console.log("Servidor se encuentra conectado http://localhost:5000"));

// Se prueba esta ruta en el navegador
app.get('/', (req, res) => {
    res.send("Servidor configurado");
});