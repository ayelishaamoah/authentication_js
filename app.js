const express = require('express');
const app = express();
const port = 3000;
const mongo = require('mongodb');
const assert = require('assert');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoClient = require('mongodb').MongoClient

// Running mongodb on local machine
const url = 'mongodb://localhost:27017/test';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({secret: 'secrettttt'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/homepage.html')));

app.post('/users/new', (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };
// connect to the database and callback on response - error or database connection
  MongoClient.connect(url,  { useNewUrlParser: true }, (err, client) => {
    // checks if we have an error
    assert.equal(null, err);
    var db = client.db('test')
    // specify which collection I want to insert data into and insert one entry
    db.collection('user-data').insertOne(user, (err, client) => {
      assert.equal(null, err);
      console.log('Inserted item');

    });
  });

  res.redirect('/listings')
});

app.get('/listings', (req, res) => {
// asynchronous block
 const resultArray = [];
  MongoClient.connect(url,  { useNewUrlParser: true }, (err, client) => {
    assert.equal(null, err);
    var db = client.db('test')
    const cursor = db.collection('user-data').find();

    cursor.forEach((doc, err) => {
      assert.equal(null, err)
      resultArray.push(doc);
    }, () => {
      resultArray.forEach((element) => {
        console.log("id " + element['_id'])
        console.log("email " + element['email'])
      });
      res.send(`Welcome ${resultArray}`)
    });
  });
 });
