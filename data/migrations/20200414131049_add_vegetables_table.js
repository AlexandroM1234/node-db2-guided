// the .up describes the changes to the database schema
exports.up = function (knex) {
  return knex.schema.createTable("veggies", (tbl) => {
    // a primary key, called ID that auto-increments
    tbl.increments();
    // makes the name string a max of 255 characters, not able to be 0, always unique , and lets you look up something faster
    tbl.string("name", 255).notNullable().unique().index();
    tbl.boolean("tasty").defaultsTo(false);
  });
};

// the .down describes how to undo the changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("veggies");
};
