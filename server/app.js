const express = require('express');
const mongoose = require('mongoose');
const room = require('./models/roomModels')

const app = express();

const dbUrl = 'mongodb+srv://Mubarak:MuBaRak1@cluster0.kcl5drf.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbUrl)
    .then(() => console.log('DB connected successfully!'))
    .catch((err) => console.log(err))

app.listen(8080, () => {
    console.log('Server running at port 8080');
})