exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('projects', function(table) {
      table.increments('id').primary(); 
      table.string('title'); 
      table.timestamps(true, true); 
    }), 

    knex.schema.createTable('palettes', function(table) {
      table.increments('id').primary(); 
      table.string('title'); 
      table.string('color_one'); 
      table.string('color_two'); 
      table.string('color_three'); 
      table.string('color_four'); 
      table.string('color_five'); 
      table.integer('project_id').unsigned()
      table.foreign('project_id')
        .references('projects.id'); 
      table.timestamps(true, true); 
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('palettes'), 
    knex.schema.dropTable('projects')
  ]); 
};
