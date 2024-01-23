const mongoose = require('mongoose');

var mongoURL = 'mongodb+srv://adesinamubarak123:Xkkltsrodt6KE6SE@cluster0.kcl5drf.mongodb.net/'

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var connection = mongoose.connection

connection.on('error', () => {
    console.log('MongoDB connection failed!')
})

connection.on('connected', () => {
    console.log('MongoDB connection successful!')
})

module.exports = mongoose