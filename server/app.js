const express = require('express');
const mongoose = require('mongoose');
const roomsRouter = require('./routes/roomsRoutes');
const usersRouter = require('./routes/usersRoutes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))

const dbUrl = 'mongodb+srv://Mubarak:MuBaRak1@cluster0.kcl5drf.mongodb.net/mRooms';

mongoose.connect(dbUrl)
    .then(() => {
        console.log('DB connected successfully!');
        app.listen(8080, () => {
            console.log('Server running at port 8080');
        })
    })
    .catch((err) => console.log(err));


app.use('/api', roomsRouter)
app.use('/api', usersRouter)