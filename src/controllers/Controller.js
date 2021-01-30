const Book = require('../models/Book');

module.exports = class BooksController {

    async index() {
        try {
            const books = await Book.find()

            return books;
        } catch (err) {
            throw new Error({ error: err.message })
        }
    }

    async create(request, response) {

        const { titulo, editora, foto, autores } = request.body;

        try {
            const book = new Book({
                titulo,
                editora,
                foto,
                autores
            });

            await book.save();

            return book;
        } catch (err) {
            return response.json({ error: err.message })
        }

    }


}