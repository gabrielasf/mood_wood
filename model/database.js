require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "mood_wood_mvp",
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql = [
    "DROP TABLE if exists log; ",
    "DROP TABLE if exists mood; ",
    "DROP TABLE if exists kid; ",
    "DROP TABLE if exists parent; " ,
    "CREATE TABLE mood (Id int primary key, feeling varchar(15) null);",
    "CREATE TABLE parent (id int auto_increment primary key, lastName varchar(25) null, firstName varchar(25) not null, email varchar(25) null, kidName varchar(25) not null, password varchar(20) not null, " +
      "constraint parent_Id_uindex unique (id), " +
      "constraint parent_email_uindex unique (email)); ",
    "CREATE TABLE log (Id int auto_increment primary key, parent_Id int not null, mood_Id int null, because text null " + 
      "constraint log_parent__fk foreign key (parent_Id) references parent (id) on update cascade on delete cascade, " +
      "constraint log_mood__fk foreign key (mood_Id) references mood (Id) on update cascade on delete cascade);" +
    "INSERT INTO mood (id, feeling) VALUES (1, 'angry');" +
    "INSERT INTO mood (id, feeling) VALUES (2, 'annoyed');" +
    "INSERT INTO mood (id, feeling) VALUES (3, 'confused');" +
    "INSERT INTO mood (id, feeling) VALUES (4, 'good');" +
    "INSERT INTO mood (id, feeling) VALUES (5, 'happy');" +
    "INSERT INTO mood (id, feeling) VALUES (6, 'proud');" +
    "INSERT INTO mood (id, feeling) VALUES (7, 'sad');" +
    "INSERT INTO mood (id, feeling) VALUES (8, 'scared');" +
    "INSERT INTO mood (id, feeling) VALUES (9, 'silly');" +
    "INSERT INTO mood (id, feeling) VALUES (10, 'shy');" +
    "INSERT INTO mood (id, feeling) VALUES (11, 'tired');" +
    "INSERT INTO mood (id, feeling) VALUES (12, 'worried');" 
  ];  


  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creations was successful!");

  });

  con.end();
});

