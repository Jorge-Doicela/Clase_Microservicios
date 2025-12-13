const repo = require('../repositories/order.repository');
exports.getAll = () => repo.getAll();
exports.getById = (id) => repo.getById(id);

exports.create = (order) => {
    if (!order.id_usuario) throw new Error("El ID del usuario es obligatorio");
    if (!order.id_producto) throw new Error("El ID del producto es obligatorio");
    return repo.create(order);
};

exports.update = (id, data) => {
    if (!data.id_usuario) throw new Error("El ID del usuario es obligatorio");
    if (!data.id_producto) throw new Error("El ID del producto es obligatorio");
    return repo.update(id, data);
};

exports.delete = (id) => repo.delete(id);