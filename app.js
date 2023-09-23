const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

require('dotenv').config();
const Controller = require('./Controller/Controller');
const { Home } = Controller;

app.set('view engine', 'ejs');

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', Home);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.nxhpsct.mongodb.net/EasyPoll`)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server Running On Port ${process.env.PORT}`)
        })
    }).catch((error) => {
        console.log(error)
    });