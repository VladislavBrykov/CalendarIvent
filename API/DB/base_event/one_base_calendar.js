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
            if(err) {
                console.log("err");
                resolve (false);
            }
            else {
                console.log(results);
                let id_user = results[0];
                id_user = id_user.id;

               // const db_users = "CREATE TABLE IF NOT EXISTS base_myevent (id int(10) unsigned NOT NULL AUTO_INCREMENT, id_user int(10), start varchar(30) NOT NULL, end varchar(30) NOT NULL, title varchar(300) NOT NULL, description varchar(1000) NOT NULL, name_calendar varchar(100) NOT NULL, PRIMARY KEY (id));"
                //connection.query(db_users, function(err, results) {
                 //   if(err) console.log(err);
                    //else {
                    
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
            
                        // connection.query(sqll, function(err, results) {
                        //     if(err) console.log(err);
                        //     console.log(results)
            
                        //         let a = results
                        //         console.log(a);
            
                        //         resolve(a);
                        // }); 
                    //}  
                //});
            }
        });
    }
    });
}

module.exports = {
    one_base_calendar: one_base_calendar
}