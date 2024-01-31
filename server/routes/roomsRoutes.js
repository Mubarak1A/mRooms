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

module.exports = router