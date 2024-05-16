// LibroController.js
// Exportamos nuestro modelo
const Libro = require('../models/Libro');

// Función agregar Libros
exports.agregarLibros = async (req, res) => {
    try {
        let libro = new Libro(req.body);
        await libro.save();
        res.send('Libro agregado');
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar un libro');
    }
};

// Mostrar libros
exports.mostrarLibros = async (req, res) => {
    try {
        const libros = await Libro.find();
        res.json(libros);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los libros');
    }
};

// Mostrar un libro
exports.mostrarUnLibro = async (req, res) => {
    try {
        let libro = await Libro.findById(req.params.id);
        if (!libro) {
            res.status(404).json({ msg: "No se encuentra el libro con ese ID" });
        }

        res.send(libro);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al buscar un libro');
    }
};

// Función eliminar libros
exports.eliminarLibros = async (req, res) => {
    try {
        let libro = await Libro.findById(req.params.id);
        if (!libro) {
            res.status(404).json({ msg: "El libro no existe" });
            return;
        }
        await Libro.findOneAndDelete({ _id: req.params.id });
        res.json({ msg: "El libro fue eliminado" });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al eliminar un libro en la base de datos');
    }
};

// Actualizar libro
exports.modificarLibro = async (req, res) => {
    try {
        let libro = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!libro) {
            return res.status(404).send('Libro no encontrado');
        }
        res.json(libro);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar el libro');
    }
};

// Buscar libros por título
exports.buscarPorTitulo = async (req, res) => {
  try {
    const { titulo } = req.query;
    const libros = await Libro.find({ titulo: new RegExp(titulo, 'i') });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar libros por autor
exports.buscarPorAutor = async (req, res) => {
  try {
    const { autor } = req.query;
    const libros = await Libro.find({ autor: new RegExp(autor, 'i') });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar libros por género
exports.buscarPorGenero = async (req, res) => {
  try {
    const { genero } = req.query;
    const libros = await Libro.find({ genero: new RegExp(genero, 'i') });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener libros por año de publicación
exports.obtenerPorAnioPublicacion = async (req, res) => {
    try {
      const { anio } = req.query;
  
      // Validar que se proporcionó el parámetro y es un número válido
      if (!anio || isNaN(parseInt(anio))) {
        return res.status(400).json({ error: 'Parámetro de año de publicación inválido' });
      }
  
      const libros = await Libro.find({ anioPublicacion: parseInt(anio) });
      res.json(libros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
// Obtener libros ordenados por título
exports.obtenerOrdenadosPorTitulo = async (req, res) => {
  try {
    const libros = await Libro.find().sort({ titulo: 1 });
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};