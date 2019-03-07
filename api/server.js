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

module.exports = server;
