function db_all_event(token) {
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
        setTimeout(all_event, 1500);
        function all_event() { 
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
                    const sqll = `SELECT * FROM myevent WHERE id_user = ?`;
                    console.log(sqll);

                    connection.query(sqll, id_user, function(err, results) {
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
    db_all_event: db_all_event
}
