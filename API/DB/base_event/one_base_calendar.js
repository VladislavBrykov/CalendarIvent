function one_base_calendar(calendar, token) {
    console.log(calendar + " calendar");
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
        setTimeout(on_base_calendar, 1500);
        function on_base_calendar() { 
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
                    const sqll = `SELECT * FROM base_myevent WHERE name_calendar = ? AND id_user = ?`;
                    console.log(sqll);
                    let param = [calendar, id_user]
                    
                    connection.query(sqll, param, function(err, results) {
                        if(err) console.log(err);
                            console.log(results)
                        let a = results
                        console.log(a);
                        resolve(a);
                    });  
                }
            });
        }
    });
}

module.exports = {
    one_base_calendar: one_base_calendar
}