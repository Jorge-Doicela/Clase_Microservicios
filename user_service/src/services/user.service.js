const repositorio = require('../repositories/user.repository');

const validateUser = (usuario, create = true) => {
    if ((create || usuario.nombre) && (!usuario.nombre || usuario.nombre.length < 3)) throw new Error("Nombre corto");
    if ((create || usuario.correo) && !/^\S+@\S+\.\S+$/.test(usuario.correo)) throw new Error("Email inválido");
    if ((create || usuario.cedula) && (!usuario.cedula || usuario.cedula.length < 8)) throw new Error("Cédula inválida");
};

exports.obtenerTodos = repositorio.obtenerTodos;
exports.obtenerPorId = repositorio.obtenerPorId;
exports.crear = async (usuario) => {
    validateUser(usuario);
    return await repositorio.crear(usuario);
};

exports.actualizar = async (id, data) => {
    validateUser(data, false);
    return await repositorio.actualizar(id, data);
};

exports.eliminar = repositorio.eliminar;