const express = require('express');
const mongoose = require('mongoose');
const roomsRoute = require('./routes/roomsRoutes');
const usersRoute = require('./routes/usersRoutes');
const bookingsRoute = require('./routes/bookingsRoutes');
const cors = require('cors');

const app = express();

app.use(cors());

const dbUrl = 'mongodb+srv://Mubarak:MuBaRak1@cluster0.kcl5drf.mongodb.net/mRooms';

mongoose.connect(dbUrl)
    .then(() => {
        console.log('DB connected successfully!');
        app.listen(8080, () => {
            console.log('Server running at port 8080');
        })
    })
    .catch((err) => console.log(err));


app.use('/api', roomsRoute)
app.use('/api', usersRoute)
app.use('/api', bookingsRoute)