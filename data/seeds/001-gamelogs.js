
exports.seed = function(knex, Promise) {
  return knex('gamelogs').del()
    .then(function () {
      return knex('gamelogs').insert([
        { homeScore: 4, awayScore: 2, innings: 9 },
        { homeScore: 6, awayScore: 0, innings: 9 },
        { homeScore: 3, awayScore: 4, innings: 11 },
        { homeScore: 2, awayScore: 7, innings: 10 }
      ]);
    });
};
