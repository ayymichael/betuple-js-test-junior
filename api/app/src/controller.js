import express from "express";
const cors = require('cors');
const colorController = require('./controllers/color.controller');
const {Client} = require('pg');

const client = new Client({
    host: "DB_HOST",
    database: "DB_NAME",
    user: "DB_USERNAME",
    password: "DB_PASSWORD",
    port: "DB_PORT",
});

client.connect();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());

app.post('/event', colorController.createColor);
app.get('/event', colorController.showColors);

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});