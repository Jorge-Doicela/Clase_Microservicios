const repositorio = require('../repositories/product.repository');

const validateProduct = (producto, isUpdate = false) => {
    if (isUpdate && !producto.nombre && !producto.descripcion && producto.precio === undefined && producto.stock === undefined) return;
    if ((!isUpdate || producto.nombre) && !producto.nombre) throw new Error("Nombre obligatorio");
    if ((!isUpdate || producto.precio !== undefined) && (typeof producto.precio !== 'number' || producto.precio <= 0)) throw new Error("Precio inválido");
    if ((!isUpdate || producto.stock !== undefined) && (typeof producto.stock !== 'number' || producto.stock < 0)) throw new Error("Stock inválido");
};

exports.obtenerTodos = repositorio.obtenerTodos;
exports.obtenerPorId = repositorio.obtenerPorId;
exports.crear = async (producto) => {
    validateProduct(producto);
    return await repositorio.crear(producto);
};

exports.actualizar = async (id, data) => {
    validateProduct(data, true);
    return await repositorio.actualizar(id, data);
};

exports.eliminar = repositorio.eliminar;