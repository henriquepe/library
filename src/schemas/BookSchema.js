const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
    titulo: String,
    editora: String,
    foto: String,
    autores: [String]
})

module.exports = bookSchema;