function db_new_pass_token(pass_token, id) {
    const mysql = require("mysql2");

    const connection = mysql.createConnection({
        host: "localhost",
        user: "Vladislav5",
        database: "project",
        password: "Vladislav5"
    });

    return new Promise((resolve, reject) => {
        const db = "USE project";
        connection.query(db, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });

		console.log(id + "id !!!!!");
		console.log(pass_token + "pass Token");
        connection.query('UPDATE tokens SET pass_token = ? WHERE id = ?', [pass_token, id]); 
        let a;

        a = {
            server_status: "true"
        }
        console.log(a);
        resolve(a);
    });
}

module.exports = {
    db_new_pass_token: db_new_pass_token
}