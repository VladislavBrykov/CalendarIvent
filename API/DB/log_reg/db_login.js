function db_login(username, password, email) {
   
    const mysql = require("mysql2");

    const connection = mysql.createConnection({
        host: "localhost",
        user: "Vladislav5",
        database: "project",
        password: "Vladislav5"
    });

    return new Promise((resolve, reject) => {
        const create_db = "CREATE DATABASE IF NOT EXISTS project";
        connection.query(create_db, function(err, results) {
            if(err) console.log(err);
            console.log(results + "create db");
        });
       
        const db = "USE project";
        connection.query(db, function(err, results) {
            if(err) console.log(err);
            console.log(results + "use project");
        });

        const db_t = "CREATE TABLE IF NOT EXISTS users (id int(10) unsigned NOT NULL AUTO_INCREMENT, login varchar(700) NOT NULL UNIQUE, password varchar(700) NOT NULL, email varchar(700) NOT NULL UNIQUE, PRIMARY KEY (id));"
        connection.query(db_t, function(err, results) {
            if(err) console.log(err);
            else {
                const sql_2 = `INSERT INTO users(login, password, email) VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE login = 'admin'`;
                 let user_admin = ['admin', 'admin', 'admin@gmail.com'];
                 connection.query(sql_2, user_admin);
            }
        });

        const db_holid = "CREATE TABLE IF NOT EXISTS holidays (id int(10) unsigned NOT NULL AUTO_INCREMENT, login varchar(50) NOT NULL, headding varchar(100) NOT NULL, body varchar(1000) NOT NULL, date varchar(100) NOT NULL, PRIMARY KEY (id));"
        connection.query(db_holid, function(err, results) {
            if(err) console.log(err);
            else {
                let holid = ['holidays', 'new year', '2021', '18.4.2021'];
                let holid_1 = ['holidays', 'test', '2021 test', '18.4.2021'];
                const sql_1 = `INSERT INTO holidays(login, headding, body, date) VALUES(?, ?, ?, ?)`;
                connection.query(sql_1, holid,);
                connection.query(sql_1, holid_1,);   
            }
    });
       
        let users = [username, password, email];
        const sqll = `SELECT id FROM users WHERE login = ?`;
        users = [username];
        connection.query(sqll, users, function(err, results) {
            if(err) console.log(err);
            console.log(results)

            if (results.length > 0) {
                let a = results[0]
                console.log(a.id);

            const db_role_userr = "CREATE TABLE IF NOT EXISTS tokens (id INT(100) NOT NULL, reg_token CHAR(254) NOT NULL, jwt_token CHAR(254), pass_token CHAR(254), used CHAR(10) DEFAULT \"false\");"
            connection.query(db_role_userr, function(err, results) {
                if(err) console.log(err);
                else {
                    const sql_3 = `INSERT INTO tokens(id, reg_token, jwt_token, pass_token, used) VALUES(?, ?, ?, ?, ?)`;
                    let token_user = [a.id, 'qqqwwweeezzzxxxcccvvv', 'qqqwwweeeooopppuuutttrrr', 'qwerty', 'true'];
                    connection.query(sql_3, token_user);
                }
            });

                a = {
                    id: a.id,
                }
                console.log(a);

                resolve(a);
                } else {
                    resolve(false);
                }
        });
    });
}

module.exports = {
    db_login: db_login
}
