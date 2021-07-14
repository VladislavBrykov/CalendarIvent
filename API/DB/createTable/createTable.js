function createTable() {
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
            else if(results) {
                const db_t = "CREATE TABLE IF NOT EXISTS users (id int(10) unsigned NOT NULL AUTO_INCREMENT, login varchar(700) NOT NULL UNIQUE, password varchar(700) NOT NULL, email varchar(700) NOT NULL UNIQUE, PRIMARY KEY (id));"
                connection.query(db_t, function(err, results) {
                    if(err) console.log(err);
                    else if(results) {
                        const sql_2 = `INSERT INTO users(login, password, email) VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE login = 'admin'`;
                        let user_admin = ['admin', 'admin', 'admin@gmail.com'];
                        connection.query(sql_2, user_admin);
                        console.log("first user INSET into users"); 
                    }

                    const db_holid = "CREATE TABLE IF NOT EXISTS holidays (id int(10) unsigned NOT NULL AUTO_INCREMENT, login varchar(50) NOT NULL, headding varchar(100) NOT NULL UNIQUE, body varchar(300) NOT NULL, date varchar(100) NOT NULL, PRIMARY KEY (id, body));"
                    connection.query(db_holid, function(err, results) {
                        if(err) console.log(err);
                        else {
                            let holid = ['holidays', 'new year', '2021', '22.5.2021'];
                            let holid_1 = ['holidays', 'test', '2021 test', '23.5.2021'];
                            const sql_1 = `INSERT INTO holidays(login, headding, body, date) VALUES(?, ?, ?, ?) ON DUPLICATE KEY UPDATE login = 'holidays'`;
                            connection.query(sql_1, holid,);
                            connection.query(sql_1, holid_1,);
                            console.log("first holidays INSET into holidays");                        
                        }
                        const db_role_user = "CREATE TABLE IF NOT EXISTS role_user (id_user INT(10) NOT NULL, role_user varchar(100) default \"user\");"
                        connection.query(db_role_user, function(err, results) {
                            if(err) console.log(err);
                            else {
                                console.log("role user create");
                            }
                            const db_online = "CREATE TABLE IF NOT EXISTS online (id_user INT(10) NOT NULL, role_user varchar(100) NOT NULL);"
                            connection.query(db_online, function(err, results) {
                                if(err) console.log(err);
                                else {
                                    console.log("online create");
                                }
                                const myevent = "CREATE TABLE IF NOT EXISTS myevent (id int(10) unsigned NOT NULL AUTO_INCREMENT, id_user int(10), start varchar(30) NOT NULL, end varchar(30) NOT NULL, title varchar(300) NOT NULL, description varchar(1000) NOT NULL, PRIMARY KEY (id));"
                                connection.query(myevent, function(err, results) {
                                    if(err) console.log(err)
                                    else {
                                        console.log("myevent create");
                                    }
                                    const base_calendars = "CREATE TABLE IF NOT EXISTS base_calendars (id_user int(10), name_table varchar(100) NOT NULL, description varchar(700) NOT NULL);"
                                    connection.query(base_calendars, function(err, results) {
                                        if(err) console.log(err);
                                        else {
                                            console.log("base_calendars create");
                                        }

                                        const base_myevent = "CREATE TABLE IF NOT EXISTS base_myevent (id int(10) unsigned NOT NULL AUTO_INCREMENT, id_user int(10), start varchar(30) NOT NULL, end varchar(30) NOT NULL, title varchar(300) NOT NULL, description varchar(1000) NOT NULL, name_calendar varchar(100) NOT NULL, PRIMARY KEY (id));"
                                        connection.query(base_myevent, function(err, results) {
                                            if(err) console.log(err);
                                            else {
                                                console.log("base_myevent create");
                                                return true;
                                            }
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            }
        });
    });
}

module.exports = {
    createTable: createTable
}
