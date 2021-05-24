function db_one_holiday(id) {
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
            const sqll = `SELECT * FROM holidays WHERE id = ?`;
            console.log(sqll);

            date = [id];
            connection.query(sqll, date, function(err, results) {
                if(err) console.log(err);
                console.log(results)
                    let a = results;
                    console.log(a);
                    resolve(a);
            });
        });
}

module.exports = {
    db_one_holiday: db_one_holiday
}