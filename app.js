const express = require('express');
const app = express();
const port = 3000;
const mongo = require('mongodb');
const assert = require('assert');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const url = 'mongodb.://localhost:3000';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'secrettttt'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')));

app.post('/users/new', function(req, res) {
  sess = req.session;
  sess.email = req.body.email;
  sess.password = req.body.password;
  res.redirect('/listings');
});

app.get('/listings', (req, res) =>
   res.send(`Welcome ${sess.email}`)
 );
