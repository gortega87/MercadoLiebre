const express = require ('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views",path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const mainRoutes = require(path.join(__dirname, 'routes','mainRoutes.js'))

app.use('/', mainRoutes);

app.listen(PORT, () => console.log('Servidor corriendo'));
