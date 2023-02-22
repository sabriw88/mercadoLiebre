const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3001;

app.use(express.static(path.resolve(__dirname, './public')));

/* app.listen(3000, () => {console.log("Servidor corriendo")}); */
app.listen(port, () => console.log('Servidor corriendo en el puerto ${port}'));

app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname, './views/home.html'))});
app.get('/register', (req, res) => {res.sendFile(path.resolve(__dirname, './views/register.html'))});
app.get('/login', (req, res) => {res.sendFile(path.resolve(__dirname, './views/login.html'))});
app.get('/add-product', (req, res) => {res.sendFile(path.resolve(__dirname, './views/add-product.html'))});