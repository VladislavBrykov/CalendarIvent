async function db_login(username, password, email) {
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
        setTimeout(login, 1500);

        function login() { 
            const db = "USE project";
            connection.query(db, function(err, results) {
                if(err) console.log(err);
                else if(results) {
                    let users = [username, password, email];
                    const sqll = `SELECT id FROM users WHERE login = ?`;
                    users = [username];
                    connection.query(sqll, users, function(err, results) {
                        if(err) 
                            console.log(err);
                        else if(results) {
                            console.log(results)
                            let a = results[0]
                            console.log(a.id);

                            a = {
                                id: a.id,
                                role: "user"
                            }    
                            console.log(a);
                            resolve(a);
                                                 
                            const db_role_userr = "CREATE TABLE IF NOT EXISTS tokens (id INT(100) NOT NULL, reg_token CHAR(254) NOT NULL, jwt_token CHAR(254), pass_token CHAR(254), used CHAR(10) DEFAULT \"false\", PRIMARY KEY (id));"
                            connection.query(db_role_userr, function(err, results) {
                                if(err) console.log(err);
                                else if(results){
                                    const sql_3 = `INSERT INTO tokens(id, reg_token, jwt_token, pass_token, used) VALUES(?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE id = ` + a.id;
                                    let token_user = [a.id, 'qqqwwweeezzzxxxcccvvv', 'qqqwwweeeooopppuuutttrrr', 'qwerty', 'true'];
                                    connection.query(sql_3, token_user);
                                    console.log("first token INSET into tokens"); 
                                }
                            });
                        }
                        resolve(false);
                    });
                }
            });
        }
    });
}

module.exports = {
    db_login: db_login
}
