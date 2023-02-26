const express = require("express");
const app = express();
const PORT = 2555;

app.get("/", (req, res) => {
    console.log(`${new Date()} | /`);
    res.sendFile(__dirname + "/index.html")
})

app.get("/:username", (req, res) => {
    if (req.params.username.startsWith("favicon.")) return;

    console.log(`${new Date()} | /${req.params.username}`);
    res.sendFile(__dirname + "/username.html")
})

app.get("*", (req, res) => {
    console.log(`${new Date()} | 404`);
    res.sendFile(__dirname + "/404.html")
})

app.listen(PORT, () => {
    console.log(`Started on port: ${PORT}`);
})