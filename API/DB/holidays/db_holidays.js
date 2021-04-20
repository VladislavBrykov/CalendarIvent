function db_holidays(date) {
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


            const sqll = `SELECT * FROM holidays WHERE date = ?`;
            console.log(sqll);

            date = [date];
            connection.query(sqll, date, function(err, results) {
                if(err) console.log(err);
                console.log(results)

             
                    let a = results;

               

                    // a = {
                    //     login: a.login,
                    //     headding: a.headding,
                    //     body: a.body,
                    //     date: a.date
                    // }
                    console.log(a);

                    resolve(a);
              
               
                
            });
        });
}

module.exports = {
    db_holidays: db_holidays
}