require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

const datos = {
    nombre: 'Alex Vargas',
    titulo: 'Curso de node'
}

//Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', datos);
});

app.get('/generic', (req, res) => {
    res.render('generic', datos)
});

app.get('/elements', (req, res) => {
    res.render('elements', datos);
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});


app.listen(port, () => {
    console.log(`App ejemplo, escuchado en el puerto: ${port}`);
});