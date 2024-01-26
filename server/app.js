const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/roomsRoutes');

const app = express();

const dbUrl = 'mongodb+srv://Mubarak:MuBaRak1@cluster0.kcl5drf.mongodb.net/mRooms';

mongoose.connect(dbUrl)
    .then(() => {
        console.log('DB connected successfully!');
        app.listen(8080, () => {
            console.log('Server running at port 8080');
        })
    })
    .catch((err) => console.log(err));


app.use('/api', router)