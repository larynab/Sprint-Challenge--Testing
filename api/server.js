//express for server
const express = require('express');
//database model
const gamesDB = require('../games/gamesModel.js');
//server uses express
const server = express();
//JSON through express for server
server.use(express.json());
//ROOT of API
server.get('/', async (req, res) => {
    res.status(200).json({ api: 'running' });
})
//GAMES CRUD
//POST
server.post('/games', async (req, res)=>{
    let body = req.body;
    if(body.title && body.genre){
        gamesDB.insert(body);
        res.status(201).json(body.id);
    }
    else{
        res.status(422).json({
            errorMessage: 'Failed to add game'
        })
    }
})
//CONNECT to server by Export!a
module.exports = server;