// Libro.js (Modelo)
const mongoose = require('mongoose');

// Este modelo debe ser igual a lo que tenga la base de datos (BD)
const libroSchema = mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    autor: {
        type: String,
        require: true
    },
    editorial: {
        type: String,
        require: true
    },
    anioPublicacion: {
        type: Number,
        require: true
    },
    genero: {
        type: String,
        require: true
    },
    resumen: {
        type: String,
        require: true
    },
    numeroPaginas: {
        type: Number,
        require: true
    },
    isbn: {
        type: String,
        require: true
    }
}, { versionKey: false });

module.exports = mongoose.model('Libro', libroSchema);