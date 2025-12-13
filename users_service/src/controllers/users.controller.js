const service = require('../services/users.service');
exports.getUsers = async (req, res) => {
    const data = await service.getAll();
    res.json(data);
};

exports.getUserById = async (req, res) => {
    const user = await service.getById(req.params.id);
    user ? res.json(user) : res.status(404).json({ error: "Usuario no encontrado" });
};

exports.createUser = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "El cuerpo de la solicitud está vacío" });
        }
        const newUser = await service.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updated = await service.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const result = await service.delete(req.params.id);
        if (!result) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        res.json({ message: "Usuario eliminado", usuario: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};