const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Serve index page
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/service', (req, res) => {
  res.render('service');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
