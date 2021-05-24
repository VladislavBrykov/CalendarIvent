function db_delete_event(event_id) {
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
        setTimeout(del_myevent, 1500);
        function del_myevent() { 
            const db = "USE project";
            connection.query(db, function(err, results) {
                if(err) console.log(err);
                console.log(results);
            });
            connection.query('DELETE FROM myevent WHERE id = ?', [event_id]);
            resolve(true);     
        }
    });
}

module.exports = {
    db_delete_event: db_delete_event
}
