// port configiration///////////////
require('dotenv').config();
const PORT = process.env.PORT;
///////////////////////////////////
// create server///////////////////
const express = require('express');
const app = express();
/////////////////////////////////
const path = require('path');
const hbs = require('hbs');
const publicDir = path.join(__dirname, 'public'); //use static files///////////////////
const viewsDir = path.join(__dirname, 'frontend/views')
const layoutsDir = path.join(__dirname, 'frontend/layout')


app.use(express.static(publicDir));
app.set('view engine', 'hbs');
app.set('views', viewsDir);
hbs.registerPartials(layoutsDir);















// /////////////routes//////////////////
const userRouter = require('./routes/user.routes');
app.use(userRouter);







app.listen(PORT, () => {
    console.log('server is running...')
})