const express = require('express');
const ejs = require('ejs');
const path = require('path');
const cookieparser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();
require('./db/conn');
const app = express();

const PORT = process.env.PORT;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));
app.use(cookieparser());

const adminRouter = require('./routes/rout');

app.use('/auth', adminRouter);


app.listen(PORT, () => {
    console.log(`Server Running At Port : ${PORT}`);
})