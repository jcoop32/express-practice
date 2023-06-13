const { log } = require('console');

//load express
const express = require('express');
const path = require('path');

//load student file
const student = require('./data/students');

//setting app to express function
const app = express();
//setting up view engine
app.set('view engine', 'ejs');
//finding path a views
app.set('views', path.join(__dirname, 'views'));

//root route
app.get('/', function (req, res) {
  //redirects to student list page
  res.redirect('/students');
});

//renders student list
app.get('/students', function (req, res) {
  //gets all student data
  const students = student.getAll();
  //displays content with student data and studentList view
  res.render('studentList', { students });
});

//listens for port 3000
app.listen(3000, function () {
  console.log('Listening to port 3000...');
});
