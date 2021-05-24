function db_del_calendar(token, name, description, id_user) {
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
        setTimeout(dl_calendar, 1500);
        function dl_calendar() { 

        // const create_db = "CREATE DATABASE IF NOT EXISTS project";
        // connection.query(create_db, function(err, results) {
        //     if(err) console.log(err);
        //     console.log(results);
        // });
        
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

                //const db_users = "CREATE TABLE IF NOT EXISTS base_calendars (id_user int(10), name_table varchar(100) NOT NULL, description varchar(700) NOT NULL);"
                //connection.query(db_users, function(err, results) {
                   // if(err) console.log(err);
                   // else {
                        const sqlll = `DELETE FROM base_calendars WHERE id_user = ? AND name_table = ? AND description = ?`;
                        let res = [id_user, name, description]
                        connection.query(sqlll, res, function(err, results) {
                           if(err) {
                               console.log("err");
                               resolve (false);
                           }
                       let a = {
                           delete: "delete calendar"
                       }
                       resolve(a);
                       
                    });   
                   // }  
                //});
            }
        });
    }
    });
}

module.exports = {
    db_del_calendar: db_del_calendar
}
