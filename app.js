const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/login');
});

app.get('/register', (req, res) => {
    res.render('pages/register');
});


app.get('/index', (req, res) => {
    res.render('pages/index');
});

app.get('/descripcion', (req, res) => {
    res.render('pages/descripcion');
});


app.listen(3000, () => console.log("Server en linea 🫡"));