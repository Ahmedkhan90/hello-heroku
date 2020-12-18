console.log("Hello World")
const PORT = process.env.PORT || 5000
var express = require("express");

var server = express();

server.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("menu: what do you want? sandwich or berger");
})
server.get("/sandwich", (req, res, next) => {
    console.log("some one is asking sandwich");
    res.send("here is sandwich");
})

server.get("/berger", (req, res, next) => {
    console.log("some one is asking berger");
    res.send("here is berger");
})

// server.listen(5000, () => {
//     console.log("server is running on port 3000");
// })

server.listen(PORT, () => {
    console.log("server is running on port: " + PORT);
})