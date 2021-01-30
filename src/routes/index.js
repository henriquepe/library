const { Router } = require('express')

const booksRouter = require('./books.routes');

const routes = Router();

routes.use('/obras', booksRouter)

routes.get('/', (request, response) => {
    return response.send('hello')
})


module.exports = routes;