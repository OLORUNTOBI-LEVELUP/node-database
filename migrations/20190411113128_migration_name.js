
exports.up = async function(knex, Promise) {
    try {
        const tableExists = await knex.schema.hasTable("requests");
        if(!tableExists){
            return knex.schema.createTable("requests", (table) => {
                table.increments();
                table.string("user_id").notNullable();
                table.string("organization_id").notNullable();
                table.string("employee_id").notNullable();
                table.string("request_type").notNullable();
                table.date("start_date").notNullable();
                table.date("end_date").notNullable();
                table.string("status").notNullable();
            
                table.index("user_id");
                table.index(("employee_id"));
                table.unique("user_id");
              

            });
        } else {
            console.log("table already exists");
        }

    }
    catch (error) {
        console.log(error);

    }
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("requests");
};
