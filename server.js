const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})