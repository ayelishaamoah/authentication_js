const express = require('express');
const app = express();
const port = 3000;
const mongo = require('mongodb');
const assert = require('assert');

const url = 'mongodb.://localhost:3000';

app.use(express.static('src'))

app.get('/', (req, res) => res.sendFile('index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
