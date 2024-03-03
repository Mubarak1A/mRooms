const express = require('express');
const Room = require('../models/roomModels')

const router = express.Router();

router.get('/rooms', (req, res) => {
    const rooms = Room.find()
        .then((results) => {
            res.send(results);
        })
        .catch((err) => console.log(err))
})

router.get('/rooms/:id', (req, res) => {
    const id = req.params.id;
    const rooms = Room.findById(id)
        .then((results) => {
            res.send(results);
        })
        .catch((err) => console.log(err))
})

router.post('/addroom', (req, res) => {
    const newRoom = new Room(req.body)

    newRoom.save()
    .then((res) => {
        res.send('Room Added Successfully')
    })
    .catch((err) => {
        return res.status(400).json({err})
    })
})

module.exports = router