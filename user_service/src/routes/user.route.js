const router = require('express').Router();
const controlador = require('../controllers/user.controller');

router.get('/', controlador.obtenerUsuarios).get('/:id', controlador.obtenerUsuarioPorId);
router.post('/', controlador.crearUsuario).put('/:id', controlador.actualizarUsuario).delete('/:id', controlador.eliminarUsuario);

module.exports = router;