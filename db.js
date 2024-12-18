const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    database: "login-pbd",
    user: "root",
    password: ""
});

db.connect((err) => {
    if (err) {
        console.error("koneksi database gagal: ", err.message);
        return;
    }
    console.log("Database Connect");
})

module.exports = db;