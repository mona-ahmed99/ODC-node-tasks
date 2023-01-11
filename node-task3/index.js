require('dotenv').config();
const PORT = process.env.PORT;
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'frontend/views'));
hbs.registerPartials(path.join(__dirname, 'frontend/layout'));






// routes////////////////////////////////////////////////
const booksRouter = require('./router/books.router');
app.use(booksRouter);

app.listen(PORT, () => {
    console.log('server is running..');
})