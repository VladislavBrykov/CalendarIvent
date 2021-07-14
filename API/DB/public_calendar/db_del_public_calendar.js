function db_del_public_calendar(name_table, token) {
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
        setTimeout(del_pb_calendar, 1500);
        function del_pb_calendar() { 
            const db = "USE project";
            connection.query(db, function(err, results) {
                if(err) console.log(err);
                console.log(results);
            });

            const sqll = `SELECT id FROM tokens WHERE jwt_token = ?`;
            connection.query(sqll, token, function(err, results) {
                if(err) {
                    console.log("err");
                    resolve (false);
                }
                else {
                    console.log(results);
                    let id_user = results[0];
                    id_user = id_user.id;
                    id_user = 99999;
                    connection.query('UPDATE base_calendars SET id_user = 999990 WHERE name_table = ? AND id_user = ?', [name_table, id_user]);
                    connection.query('UPDATE base_myevent SET id_user = 999990 WHERE name_calendar = ? AND id_user = ?', [name_table, id_user]);
                    console.log("UPDATE");
                    resolve(true);     
                }
            });
        }
    });
}

module.exports = {
    db_del_public_calendar: db_del_public_calendar
}
