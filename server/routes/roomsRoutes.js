const express = require('express');
const Room = require('../models/roomModels')

const router = express.Router();

router.use(express.json());

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
    const newRoom = new Room(req.body);
  
    // Synchronous validation
    const validationError = newRoom.validateSync();
  
    if (validationError) {
      return res.status(400).json({ err: validationError });
    }
  
    // Save the room
    newRoom.save()
      .then((savedRoom) => {
        res.status(201).send('Room Added Successfully');
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  });
  

module.exports = router