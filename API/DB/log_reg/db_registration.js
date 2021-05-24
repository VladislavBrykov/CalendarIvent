function db_registration(username, password, email, role_user) {
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
        setTimeout(registration, 1500);
        function registration() { 

        const db = "USE project";
        connection.query(db, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });

        const create = require('../createTable/createTable')
        create.createTable()
        setTimeout(registration, 1500);
         // const create_db = "CREATE DATABASE IF NOT EXISTS project";
         // connection.query(create_db, function(err, results) {
         //     if(err) console.log(err);
         //     console.log(results + "create db");
         // });
        function registration() { 

const tokens = "CREATE TABLE tokens (id INT(100) NOT NULL, reg_token CHAR(254) NOT NULL, jwt_token CHAR(254), pass_token CHAR(254), used CHAR(10) DEFAULT \"false\");"

        connection.query(tokens, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });

        let users = [username, password, email];
        const sql = `INSERT INTO users(login, password, email) VALUES(?, ?, ?)`;
        connection.query(sql, users, function(err, results) {
            if(err) {
                console.log(err);
                let error = toString(err[0]);
                error = error.sqlMessage;
                resolve (error);
            }

            const sqll = `SELECT id FROM users WHERE login = ?`;
            console.log(sqll);
            users = [username];
            connection.query(sqll, users, function(err, results) {
                if(err) console.log(err);
                console.log(results)

                if (results.length > 0) {
                    let a = results[0]
                    console.log(a.id);

                    let users = [a.id, role_user];

                    const sql = `INSERT INTO role_user(id_user, role_user) VALUES(?, ?)`;
                    connection.query(sql, users, function(err, results) { 
                        if(err) console.log(err);

                    let idd = a.id;
                    let online = "off";
                    let id = [idd, online];

                    const sqlll = `INSERT INTO online(id_user, role_user) VALUES(?, ?)`;
                    connection.query(sqlll, id);

                    });

                    a = {
                        id: a.id
                    }
                    console.log(a);

                    resolve(a);
                }
            
            });
        });
    }
    }
    });
}

module.exports = {
    db_registration: db_registration
}