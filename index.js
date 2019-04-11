const config = require("./knexfile");
const knex = require("knex")(config.development);

(async () => {
    try {
        const employee = {
            employee_id: "Lu-001",
            first_name: 'OLORUNTOBI',
            middle_name: "ademola",
            last_name: 'awoderu',
            gender: "male",
            phone: "234567890",
            department: "tech",
            email: "awoderuoloruntobi@gmail.com"
        }
        const result = await knex("employees").insert(employee);
        console.log(result);
    } catch {
            console.log(error);
            
    }
})();