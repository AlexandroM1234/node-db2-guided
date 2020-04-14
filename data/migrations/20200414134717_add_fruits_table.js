exports.up = function (knex) {
  return knex.schema.createTable("fruits", (tbl) => {
    tbl.increments();
    tbl.string("name", 255).notNullable().unique().index();
    tbl.decimal("avgWeightOz", 8, 2);
    tbl.boolean("delicious").defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("fruits");
};
