const express = require('express');

const gamelogs = require('../gamelogs/gamelogsModel.js');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
  res.status(200).json({ api: 'Running...' });
});

server.get('/gamelogs', async (req, res) => {
  const rows = await gamelogs.getAll();

  res.status(200).json(rows);
});

server.post('/gamelogs', async (req, res) => {
    const gamelog = req.body;
    if(gamelog.homeScore && gamelog.awayScore){
        gamelogs.insert(gamelog)
            .then(newGamelog => {
                res.status(201).json(newGamelog);
            })
            .catch(() => {
                res.status(500).json({ message: 'Gamelog failed to add'})
            })
    } else {
        res.status(400).json({ message: 'Missing gamelog details' })
    }
})

module.exports = server;
