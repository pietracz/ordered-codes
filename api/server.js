const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000

app.use(express.static(path.join(__dirname + 'public')));

app.get('/home', (req, res) => {
    res.sendFile(
      __dirname + '/html/home.html'
    );
  });

app.get('/about', (req, res) => {
    res.sendFile(
      __dirname + '/html/about.html'
    );
  });

app.get('/contact', (req, res) => {
    res.sendFile(
      __dirname + '/html/contact.html'
    );
  });

app.get('/login', (req, res) => {
    res.sendFile(
      __dirname + '/html/login.html'
    );
  });

app.get('/register', (req, res) => {
    res.sendFile(
      __dirname + '/html/register.html'
    );
  });

app.get('/courses', (req, res) => {
    res.sendFile(
      __dirname + '/html/courses.html'
    );
  });

app.get('/projects', (re, res) => {
    res.sendFile(
      __dirname + '/html/projects.html'
    );
  });

  app.listen(PORT, (req, res) => {
    console.log(`Server gestartet, unter: http://localhost:${PORT}/home`);
  })