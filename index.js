const express = require('express');
const app = express();
const {add,multi,minus} = require("./my-code.js");

let server = app.listen(process.env.PORT || 8081, () => {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Example app listening at http://${host}:${port}`);
 })

 app.get("/", (req,res) => {
    console.log("Basic Calc will coming soon");
    res.send (`<h2>Hi evrybody, Basic Calc will coming soon</h2>`);
 });
