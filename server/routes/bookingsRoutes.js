const express = require('express');
const bookings = require('../models/bookingModels');
const Room = require('../models/roomModels');
const stripe = require('stripe')('sk_test_51OmfrQHLqMV9clnFqwbUKfsxH2Oq4gdZijv5QGktH91GlrxjKPlbrTD6XqKHCKNSISjiUXdu8RuToVhPmUs3mFs000tG2OBILA')
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.use(express.json());

router.post('/bookroom', (req, res) => {
    const {
        room,
        userid,
        fromDate,
        toDate,
        totalAmount,
        totalDays,
        token
    } = req.body;

    let newBooking;

    stripe.customers.create({
        email: token.email,
        source: token.id
    })
        .then((customer) => {
            return stripe.charges.create({
                amount: totalAmount * 100,
                customer: customer.id,
                currency: 'USD',
                receipt_email: token.email
            }, {
                idempotencyKey: uuidv4()
            });
        })
        .then(() => {
            return bookings.create({
                room: room.name,
                roomid: room._id,
                userid,
                fromdate: fromDate,
                todate: toDate,
                totalamount: totalAmount,
                totaldays: totalDays,
                transactionid: '1234'
            });
        })
        .then((bookedRoom) => {
            newBooking = bookedRoom;
            return Room.findOneAndUpdate(
                { _id: newBooking.roomid },
                { $push: { currentbookings: newBooking } },
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

router.post('/getbookingsbyid', (req, res) => {
    const userid = req.body.userid

    bookings.find({ userid: userid })
        .then((bookings) => {
            res.send(bookings)
        })
        .catch((err) => {
            res.status(400).json({ err })
        })
})

router.post('/bookings/cancelbooking', (req, res) => {
    const { bookingid, roomid } = req.body;

    bookings.findOne({ _id: bookingid })
        .then((booking) => {
            booking.status = 'cancelled';
            return booking.save();
        })
        .then(() => {
            Room.findOne({ _id: roomid })
        })
        .then((room) => {
            room.currentbookings = room.currentbookings.filter((booking) => booking.bookingid.toString() !== bookingid);
            return room.save();
        })
        .then(() => {
            res.send('Booking Cancelled Successfully');
        })
        .catch((err) => {
            res.status(400).json({ err: err.message });
        });
});

router.get('/getbookings', (req, res) => {
    bookings.find()
    .then((bookings) => {
        res.send(bookings)
    })
    .catch((err) => {
        res.status(400).json({err})
    })
})

module.exports = router;
