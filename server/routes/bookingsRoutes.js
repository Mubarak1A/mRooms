const express = require('express');
const bookings = require('../models/bookingModels');
const Room = require('../models/roomModels');

const router = express.Router();

router.use(express.json());

router.post('/bookroom', (req, res) => {
    const {
        room,
        userid,
        fromDate,
        toDate,
        totalAmount,
        totalDays
    } = req.body;

    let newBooking;

    // Step 1: Save the new booking
    bookings.create({
        room: room.name,
        roomid: room._id,
        userid,
        fromdate: fromDate,
        todate: toDate,
        totalamount: totalAmount,
        totaldays: totalDays,
        transactionid: '1234'
    })
    .then((bookedRoom) => {
        newBooking = bookedRoom;

        // Step 2: Find the room and update the currentbookings array
        return Room.findOneAndUpdate(
            { _id: newBooking.roomid },
            {
                $push: {
                    currentbookings: {
                        bookingid: newBooking._id,
                        fromdate: fromDate,
                        todate: toDate,
                        userid: userid,
                        status: newBooking.status
                    }
                }
            },
            { new: true }
        );
    })
    .then((updatedRoom) => {
        res.send('Booking Successful!');
    })
    .catch((err) => {
        res.status(400).json({ err: err.message });
    });
});

module.exports = router;
