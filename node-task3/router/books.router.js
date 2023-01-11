const router = require('express').Router();
const booksController = require('../controller/books.controller')
// get All Books/////////////////////////////
router.get('/', booksController.getAllBooks);
// Add Book/////////////////////////////////////
router.get('/addBook', booksController.addBook);
router.post('/addBook', booksController.submitAddForm);
// update Books////////////////////////////////
router.get('/updateBook/:id', booksController.updateBook);
router.post('/updateBook/:id', booksController.submitUpdateForm);
// delete Books/////////////////////////////////
router.get('/delBook/:id', booksController.deleteBook)
// search//////////////////////////////////////
router.post('/search', booksController.searchBook)
// arrrange by name////////////////////////////
router.post('/arrangeByName', booksController.arrangeByName);
// arrange By Pages///////////////////////////////
router.post('/arrangeByPages',booksController.arrangeByPages)



module.exports = router;