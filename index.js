const express = require("express");
const app = express();
const PORT = 2555;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/:username", (req, res) => {
    res.sendFile(__dirname + "/username.html")
})

app.get("*", (req, res) => {
    res.sendFile(__dirname + "/404.html")
})

app.listen(PORT, () => {
    console.log(`Started on port: ${PORT}`);
})