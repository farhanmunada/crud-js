const express = require("express");
const {getUsers, addUser} = require("./handler");

const router = express.Router();

router.get("/", getUsers);

router.post("/tambah", addUser)

module.exports = router;