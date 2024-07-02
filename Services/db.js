const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Phonebook')

const Contact= mongoose.model('contact',{
    id:String,
    name:String,
    email:String,
    address:String,
    phone:String,
})

module.exports={
    Contact
}