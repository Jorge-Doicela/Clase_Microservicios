const db = require("../database/index.db");

exports.getAll = async () => {
    const result = await db.query("SELECT * FROM orders");
    return result.rows;
}

exports.getById = async (id) => {
    const result = await db.query("SELECT * FROM orders WHERE id_order = $1", [id]);
    return result.rows[0];
}

exports.create = async (order) => {
    const result = await db.query(
        "INSERT INTO orders (id_usuario, id_producto) VALUES ($1, $2) RETURNING *",
        [order.id_usuario, order.id_producto]
    );
    return result.rows[0];
}

exports.update = async (id, order) => {
    const result = await db.query(
        "UPDATE orders SET id_usuario = $1, id_producto = $2 WHERE id_order = $3 RETURNING *",
        [order.id_usuario, order.id_producto, id]
    );
    return result.rows[0];
}

exports.delete = async (id) => {
    const result = await db.query("DELETE FROM orders WHERE id_order = $1 RETURNING *", [id]);
    return result.rows[0];
}