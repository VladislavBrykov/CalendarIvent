function db_new_event(start, end, title, description, token, calendar) {
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
        setTimeout(nw_event, 1500);
       function nw_event() { 
       
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

               // const db_users = "CREATE TABLE IF NOT EXISTS base_myevent (id int(10) unsigned NOT NULL AUTO_INCREMENT, id_user int(10), start varchar(30) NOT NULL, end varchar(30) NOT NULL, title varchar(300) NOT NULL, description varchar(1000) NOT NULL, name_calendar varchar(100) NOT NULL, PRIMARY KEY (id));"
               // connection.query(db_users, function(err, results) {
               //     if(err) console.log(err);
               //     else {
                        let holid = [id_user, start, end, title, description, calendar];
                        const sql_1 = `INSERT INTO base_myevent(id_user, start, end, title, description, name_calendar) VALUES(?, ?, ?, ?, ?, ?)`;
                        connection.query(sql_1, holid,);
                        console.log("sozdano");
                        resolve(true);     
                   // }  
                //});
            }
        });
    }
    });
}

module.exports = {
    db_new_event: db_new_event
}
