const mongoose = require("mongoose")

const Schema = mongoose.Schema()

const ContactSchema = new Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        message: 'Default error message'
    },
    phone: {
        type: String,
        trim: true,
        match: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
        message: 'Default error message'
    },
    inquiry: {
        type: String,
        trim: true,
        required: true
    }
})

const Contact = mongoose.model("Contact", ContactSchema)

module.exports = Contact