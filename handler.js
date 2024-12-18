const db = require("./db");

const getUsers = (req, res) => {
    const sql = "SELECT * FROM `user-db`";
    db.query(sql, (err, result) => {
        if (err) {
            console.error("gagal mengambil data: ", err.message);
            return result.status(500).send("Server Error");
        }

        const users = JSON.parse(JSON.stringify(result));
        res.render("index", {users : users, title : "Show Database Content"});
    });
};

const addUser = (req, res) => {
    const insertSql = "INSERT INTO `user-db` (email, password) VALUES (?, ?)";
    const values = [req.body.email, req.body.password];

    db.query(insertSql, values, (err, result) => {
        if (err) {
            console.error("Gagal menembahkan data: ", err.message);
        }
        res.redirect("/");
    });
};

module.exports = {getUsers, addUser};