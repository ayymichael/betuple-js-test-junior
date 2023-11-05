const db = require('../db');
const crypto = require('crypto');

class ColorController {
    async createColor(req, res) {
        const { color_r, color_g, color_b } = req.body;
        console.log(color_r, color_g, color_b);
        const uuid = crypto.randomUUID();
        const date_created = new Date();
        const newColor = await db.query(`INSERT INTO color_events (id, date_created, color_r ,color_g ,color_b) values ($1, $2, $3, $4, $5) RETURNING *;`, [uuid, date_created, color_r, color_g, color_b]);
        res.json(newColor.rows);
    }

    async showColors(req, res) {
        const events = await db.query('SELECT * FROM color_events;');
        res.json(events.rows);
    }
}

module.exports = new ColorController();