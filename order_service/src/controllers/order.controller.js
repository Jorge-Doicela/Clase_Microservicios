const service = require('../services/order.service');
exports.getOrders = async (req, res) => {
    const data = await service.getAll();
    res.json(data);
};

exports.getOrderById = async (req, res) => {
    const order = await service.getById(req.params.id);
    order ? res.json(order) : res.status(404).json({ error: "Orden no encontrada" });
};

exports.createOrder = async (req, res) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: "El cuerpo de la solicitud está vacío" });
        }
        const newOrder = await service.create(req.body);
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updated = await service.update(req.params.id, req.body);
        if (!updated) {
            return res.status(404).json({ error: "Orden no encontrada" });
        }
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const result = await service.delete(req.params.id);
        if (!result) {
            return res.status(404).json({ error: "Orden no encontrada" });
        }
        res.json({ message: "Orden eliminada", orden: result });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};