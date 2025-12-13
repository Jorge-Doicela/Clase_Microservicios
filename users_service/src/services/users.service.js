const repo = require('../repositories/users.repository');
exports.getAll = () => repo.getAll();
exports.getById = (id) => repo.getById(id);

exports.create = (usuario) => {
    if (!usuario.cedula) throw new Error("La cédula del usuario es obligatoria");
    if (!usuario.nombre) throw new Error("El nombre del usuario es obligatorio");
    if (!usuario.correo) throw new Error("El correo del usuario es obligatorio");
    return repo.create(usuario);
};

exports.update = (id, data) => {
    if (!data.cedula) throw new Error("La cédula del usuario es obligatoria");
    if (!data.nombre) throw new Error("El nombre del usuario es obligatorio");
    if (!data.correo) throw new Error("El correo del usuario es obligatorio");
    return repo.update(id, data);
};

exports.delete = (id) => repo.delete(id);