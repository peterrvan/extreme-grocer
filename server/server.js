const path = require('path');
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.json());
// console.log(path.resolve("server", "..", "bundle"));
app.get('/', (req, res, next) => {
    return res.sendFile(path.resolve(__dirname, '../index.html'));
});

console.log(path.resolve(__dirname, '../index.html'));
app.use('/search', (req, res, next) => {
    // console.log('HELLO');
    return res.sendFile(path.resolve(__dirname, '../client/pages/search.html'));
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });

module.exports = app;