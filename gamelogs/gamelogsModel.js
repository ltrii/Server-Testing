const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(gamelog) {
  const [id] = await db('gamelogs').insert(gamelog, 'id');

  return db('gamelogs')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('gamelogs');
}

function findById(id) {
  return null;
}
