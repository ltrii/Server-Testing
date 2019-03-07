exports.up = function(knex, Promise) {
    return knex.schema.createTable('gamelogs', tbl => {
      tbl.increments();
  
      tbl.integer('homeScore').notNull().defaultTo(0);
      tbl.integer('awayScore').notNull().defaultTo(0);
      tbl.integer('Innings').notNull().defaultTo(9);
    });
  };
  
  exports.down = function(knex, Promise) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('gamelogs');
  };
  