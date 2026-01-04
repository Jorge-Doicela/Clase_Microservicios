const router = require('express').Router();
const controlador = require('../controllers/order.controller');

router.get('/', controlador.obtenerOrdenes).get('/:id', controlador.obtenerOrdenPorId);
router.post('/', controlador.crearOrden).put('/:id', controlador.actualizarOrden).delete('/:id', controlador.eliminarOrden);

module.exports = router;