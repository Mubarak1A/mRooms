const express = require('express');
const router = require('router');

const Rooms = require('../models/room');

router.get('/getallrooms', async(req, res) => {
    try {
        const rooms = await Rooms.find({})
        return res.send(rooms)
    } catch (error) {
        return res.status(400).json({message: error});
    }
});

module.exports = router;
