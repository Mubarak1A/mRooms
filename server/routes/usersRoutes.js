const express = require("express");
const router = express.Router()
const User = require("../Models/userModels");

router.use(express.json());

router.post("/register", (req, res) => {
    const newuser = new User(req.body)
    
    newuser.save()
        .then((results) => {
            res.send("Registration Successful!");
        })
        .catch((err) => {
            return res.status(400).json({err})
        })
})

router.post("/login", (req, res) => {
    const {email, password} = req.body

    User.findOne({email : email, password : password})
        .then((user) => {
            console.log(user)
            res.send(user)
        })
        .catch((err) => {
            return res.status(400).json({err})
        })
})
module.exports = router