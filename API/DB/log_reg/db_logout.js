function db_logout(jwt_token) {
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
        setTimeout(logout, 1500);
        function logout() { 
            const db = "USE project";
            connection.query(db, function(err, results) {
                if(err) console.log(err);
                console.log(results);

                const jwt_sqll = `SELECT id FROM tokens WHERE jwt_token = ?`;
                connection.query(jwt_sqll, jwt_token, function(err, results) {
                    console.log(results);
                    if(results.length < 1) {
                        console.log("err");
                        resolve(false);
                    }
                    else {
                        let id = results[0];
                        id = id.id;
                        let online = "off";
                        let idd = id;
                        connection.query('UPDATE online SET role_user = ? WHERE id_user = ?', [online, idd]) 
                        if(err) console.log(err);
                        else {
                            console.log(results);
                            let a = {
                                class_role: "off"
                            }
                        resolve(a);
                        }
                    }
                });
            });
        }
    });
}

module.exports = {
    db_logout: db_logout
}