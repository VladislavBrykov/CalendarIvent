function db_all_event(token) {
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
            console.log(results);
        });
        
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

                const db_users = "CREATE TABLE IF NOT EXISTS myevent (id int(10) unsigned NOT NULL AUTO_INCREMENT, id_user int(10), start varchar(20) NOT NULL, end varchar(20) NOT NULL, title varchar(300) NOT NULL, description varchar(1000) NOT NULL, PRIMARY KEY (id));"
                connection.query(db_users, function(err, results) {
                    if(err) console.log(err);
                    else {
                    
                        const sqll = `SELECT * FROM myevent WHERE id_user = ?`;
            console.log(sqll);

            connection.query(sqll, id_user, function(err, results) {
                if(err) console.log(err);
                console.log(results)

                    let a = results
                    console.log(a);

                    resolve(a);
            });  
            
                        // connection.query(sqll, function(err, results) {
                        //     if(err) console.log(err);
                        //     console.log(results)
            
                        //         let a = results
                        //         console.log(a);
            
                        //         resolve(a);
                        // }); 
                    }  
                });
            }
        });
    });
}

module.exports = {
    db_all_event: db_all_event
}
