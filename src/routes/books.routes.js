const { Router } = require('express');

const Controller = require('../controllers/Controller');
const BooksController = require('../controllers/BooksController');

const booksRouter = Router()
const controller = new Controller();
const booksController = new BooksController();



booksRouter.post('/', async (request, response) => {



    const book = await controller.create(request, response);

    return response.json(book)

})

booksRouter.get('/', async (request, response) => {

    const books = await controller.index();

    return response.json(books)

})

booksRouter.get('/:id', async (request, response) => {

    const book = await booksController.findOneBook(request);

    return response.json(book)

})

booksRouter.delete('/:id', async (request, response) => {

    await booksController.deleteOneBook(request);

    return response.json({ message: 'book deleted' })

})

module.exports = booksRouter;

