function db_base_calendar(nameTable, description, token) {
    const mysql = require("mysql2");

    const connection = mysql.createConnection({
        host: "localhost",
        user: "Vladislav5",
        database: "project",
        password: "Vladislav5"
    });

    return new Promise((resolve, reject) => {
        const create = require('../createTable/createTable')
        create.createTable()
        setTimeout(bs_calendar, 1500);
            function bs_calendar() { 
                const db = "USE project";
                connection.query(db, function(err, results) {
                    if(err) console.log(err);
                        console.log(results);
                });

                const sqll = `SELECT id FROM tokens WHERE jwt_token = ?`;
            
                connection.query(sqll, token, function(err, results) {
                    if(!results[0]) {
                        console.log("err");
                    resolve (false);
                    }
                    else {
                        console.log(results);
                        let id_user = results[0];
                        id_user = id_user.id;
                        let event = [id_user, nameTable, description];
                        const sql_1 = `INSERT INTO base_calendars(id_user, name_table, description) VALUES(?, ?, ?)`;
                        connection.query(sql_1, event,);
                        console.log("sozdano");
                    resolve(true);     
                    }
                });
            }
    });
}

module.exports = {
    db_base_calendar: db_base_calendar
}
