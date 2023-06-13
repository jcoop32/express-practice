const { log } = require('console');

//load express
const express = require('express');
const path = require('path');

//load data files
const student = require('./data/students');
const car = require('./data/carMakers');
const game = require('./data/games');
const stock = require('./data/stocks');

//setting app to express function
const app = express();
//setting up view engine
app.set('view engine', 'ejs');
//finding path a views
app.set('views', path.join(__dirname, 'views'));

//root route
app.get('/', function (req, res) {
  //redirects to student list page
  res.render('home');
});

//renders student list
app.get('/students', function (req, res) {
  //gets all student data
  const students = student.getAll();
  //displays content with student data and studentList view
  res.render('studentList', { students });
});

//renders car list
app.get('/cars', function (req, res) {
  const cars = car.getAll();
  res.render('carList', { cars });
});

//renders game list
app.get('/games', function (req, res) {
  const games = game.getAll();
  res.render('gameList', { games });
});

//renders stock list
app.get('/stocks', function (req, res) {
  const stocks = stock.getAll();
  res.render('stockList', { stocks });
});

//listens for port 3000
app.listen(3000, function () {
  console.log('Listening to port 3000...');
});
