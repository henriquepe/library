const Book = require('../models/Book');

module.exports = class BooksController {

    async findOneBook(request) {

        try {
            const { id } = request.params;

            const book = await Book.findById(id);

            return book;
        } catch (err) {
            throw new Error('Book probably does not exists, please verify the id');
        }


    }

    async deleteOneBook(request) {

        try {
            const { id } = request.params;

            await Book.findByIdAndDelete(id);

            return;
        } catch (err) {
            throw new Error('Book probably does not exists, please verify the id');
        }


    }


}