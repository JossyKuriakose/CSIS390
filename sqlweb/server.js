"use strict";

const express = require('express');
const app = express();
const port = 3000;
const sqlite3 = require('sqlite3');
const sqlite = require('sqlite');

app.get('/posted', async function (req, res) {
    let db = await getDBConnection();
    let rows = await db.all('SELECT Title from Album Where ArtistId = 2 LIMIT 5');
    console.log(rows);
    res.status(200).type('json').send(rows);
});

//app.get('/posted', function (req, res) {
//res.set("Content-Type", "application/json");
//res.json({ "msg": "Hello world!" });
// which also sets the content type to application/json
//});

app.listen(port, () => {
    console.log('Example app listening on port ${port}')
})

async function getDBConnection() {
    const db = await sqlite.open({
        filename: "Chinook_Sqlite.sqlite",
        driver: sqlite3.Database
    });

    return db;
}

app.listen(8080);
console.log("Server is running on port 8080");

