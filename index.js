const express = require("express");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todoRoutes");
const app = express();

app.use(bodyParser.json());

app.use("/", todoRoutes);

app.listen(3000, () => {
    console.log("server is running");
})