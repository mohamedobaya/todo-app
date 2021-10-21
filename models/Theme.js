const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThemeSchema = new Schema({
    themeID : {
        type: String,
        required: true
    },
    theme:{
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model('Theme', ThemeSchema)

module.exports =Todo