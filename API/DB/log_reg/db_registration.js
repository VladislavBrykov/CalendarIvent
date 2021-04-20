function db_registration(username, password, email, role_user) {
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

//
          const avatar = "CREATE TABLE IF NOT EXISTS avatar (id int(10) unsigned NOT NULL, avatar varchar(700) NOT NULL);"
          connection.query(avatar, function(err, results) {
              if(err) console.log(err);
              console.log(results);
          });
//

//
  const categories = "CREATE TABLE IF NOT EXISTS categories (id int(10) unsigned NOT NULL AUTO_INCREMENT, category varchar(100) NOT NULL);"
  connection.query(categories, function(err, results) {
      if(err) console.log(err);
      console.log(results);
  });
// //
//!!!!!!!!!!!!!!!!!!!!!
  const comments = "CREATE TABLE IF NOT EXISTS comments (id int(10) unsigned NOT NULL AUTO_INCREMENT, id_post int(100) NOT NULL, id_user int(100) NOT NULL, comment text(700) NOT NULL, status varchar(100) NOT NULL)  PRIMARY KEY (`id`);"
  connection.query(comments, function(err, results) {
      if(err) console.log(err);
      console.log(results);
  });
// //

// //!!!!!!!!!!!!!!!!!!!!!
  const likes = "CREATE TABLE IF NOT EXISTS likes (id int(10) unsigned NOT NULL AUTO_INCREMENT, publish_date datetime NOT NULL, post_id int(100) DEFAULT '-1', comment_id int(100) DEFAULT '-1', type_role varchar(100) NOT NULL)  PRIMARY KEY (`id`), id_user int NOT NULL, PRIMARY KEY (`id`));"
  connection.query(likes, function(err, results) {
      if(err) console.log(err);
      console.log(results);
  });
// //

// //
// const online = "CREATE TABLE IF NOT EXISTS online (id_user int NOT NULL, role_user varchar(100) NOT NULL);"
// connection.query(online, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// });
// //

        const db_t = "CREATE TABLE IF NOT EXISTS users (id int(10) unsigned NOT NULL AUTO_INCREMENT, login varchar(700) NOT NULL UNIQUE, password varchar(700) NOT NULL, email varchar(700) NOT NULL UNIQUE, PRIMARY KEY (id));"
        connection.query(db_t, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });

        const db_posts = "CREATE TABLE IF NOT EXISTS posts (id int(10) unsigned NOT NULL AUTO_INCREMENT, title varchar(700) NOT NULL, content TEXT(7000) NOT NULL, id_categiries int(10) NOT NULL, id_user int(10) NOT NULL, status varchar(15) NOT NULL, PRIMARY KEY (id));"
        connection.query(db_posts, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });


// //
        //   const db_posts = "CREATE TABLE IF NOT EXISTS role_user (id_user int(100) NOT NULL, role_user varchar(100) DEFAULT \"user\");"
        //   connection.query(db_posts, function(err, results) {
        //       if(err) console.log(err);
        //       console.log(results);
        //   });
// //
const tokens = "CREATE TABLE tokens (id INT(100) NOT NULL, reg_token CHAR(254) NOT NULL, jwt_token CHAR(254), pass_token CHAR(254), used CHAR(10) DEFAULT \"false\");"

        connection.query(tokens, function(err, results) {
            if(err) console.log(err);
            console.log(results);
        });


        let users = [username, password, email];
        const sql = `INSERT INTO users(login, password, email) VALUES(?, ?, ?)`;
        connection.query(sql, users, function(err, results) {
            if(err) {
                console.log(err);
                let error = toString(err[0]);

                error = error.sqlMessage;
                resolve (error);
            }


            const sqll = `SELECT id FROM users WHERE login = ?`;
            console.log(sqll);

            users = [username];
            connection.query(sqll, users, function(err, results) {
                if(err) console.log(err);
                console.log(results)

                if (results.length > 0) {
                    let a = results[0]
                    console.log(a.id);

                    let users = [a.id, role_user];

                    const db_role_user = "CREATE TABLE IF NOT EXISTS role_user (id_user INT(10) NOT NULL, role_user varchar(100) default \"user\");"
                    connection.query(db_role_user, function(err, results) {
                        if(err) console.log(err);
                        console.log(results);
                    });

                    const sql = `INSERT INTO role_user(id_user, role_user) VALUES(?, ?)`;
                    connection.query(sql, users, function(err, results) { 
                        if(err) console.log(err);

                    let idd = a.id;
                    let online = "off";
                    let id = [idd, online];

                    const db_online = "CREATE TABLE IF NOT EXISTS online (id_user INT(10) NOT NULL, role_user varchar(100) NOT NULL);"
                    connection.query(db_online, function(err, results) {
                        if(err) console.log(err);
                        console.log(results);
                    });

                    const sqlll = `INSERT INTO online(id_user, role_user) VALUES(?, ?)`;
                    connection.query(sqlll, id);

                    });

                    a = {
                        id: a.id
                    }
                    console.log(a);

                    resolve(a);
                }
            
            });
        });
    });
}

module.exports = {
    db_registration: db_registration
}