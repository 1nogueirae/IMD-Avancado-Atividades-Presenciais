exports.up = function(knex) {
  return knex.schema.createTable('clients', (table) => {
    table.increments('id').primary();
    table.string('email');
    table.string('password');
    table.string('name');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('clients');
};