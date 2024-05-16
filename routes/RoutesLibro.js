// RoutesLibro.js
const express = require('express');
const router = express.Router();
const LibroController = require('../controllers/LibroController');

// Acá van las rutas del CRUD
router.post('/', LibroController.agregarLibros);
router.get('/', LibroController.mostrarLibros);
router.get('/:id', LibroController.mostrarUnLibro);
router.delete('/:id', LibroController.eliminarLibros);
router.patch('/:id', LibroController.modificarLibro);
router.get('/buscar/titulo', LibroController.buscarPorTitulo);
router.get('/buscar/autor', LibroController.buscarPorAutor);
router.get('/buscar/genero', LibroController.buscarPorGenero);
router.get('/buscar/anio', LibroController.obtenerPorAnioPublicacion);
router.get('/ordenar/titulo', LibroController.obtenerOrdenadosPorTitulo);

module.exports = router;