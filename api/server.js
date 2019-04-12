//express for server
const express = require('express');
//database model

//server uses express
const server = express();
//JSON through express for server
server.use(express.json());
//ROOT of API
server.get('/', async (req, res) => {
    res.status(200).json({ api: 'running' });
})
//CONNECT by Export!
module.exports = server;