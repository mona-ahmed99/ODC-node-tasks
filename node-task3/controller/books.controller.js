const dealJson = require('../helper/dealWithJson.helper')

class Books {
    // show all books///////////////////////////
    static getAllBooks = (req, res) => {
        const result = dealJson.readFromJson();
        res.render('allBooks.hbs', { result, hasBooks: result.length });
    }
    // ////////////////////////////////////
    // add books////////////////////////////
    static addBook = (req, res) => {
        res.render('addBook.hbs');
    }
    static submitAddForm = (req, res) => {
        // res.send(req.body);
        const allBooks = dealJson.readFromJson();
        const book = {
            id: Date.now(),
            ...req.body
        }
        allBooks.push(book);
        dealJson.writeToJson(allBooks);
        res.redirect('/');
    }
    // //////////////////////////////////////
    // update Books//////////////////////////
    static updateBook = (req, res) => {
        const allBooks = dealJson.readFromJson();
        const result = allBooks.find(book => book.id == req.params.id)
        res.render('updateBook.hbs', { result })
    }
    static submitUpdateForm = (req, res) => {
        const allBooks = dealJson.readFromJson();
        const index = allBooks.findIndex(book => book.id == req.params.id);
        const newBook = {
            id: req.params.id,
            ...req.body
        }
        allBooks[index] = newBook;
        dealJson.writeToJson(allBooks);
        res.redirect('/');
    }
    // //////////////////////////////////////
    // delete Books///////////////////////////
    static deleteBook = (req, res) => {
        const allBooks = dealJson.readFromJson();
        const bookIndex = allBooks.findIndex(book => book.id == req.params.id);
        allBooks.splice(bookIndex, 1);
        dealJson.writeToJson(allBooks);
        res.redirect('/');
    }
    // ////////////////////////////////////////
    // search books////////////////////////////
    static searchBook = (req, res) => {
        const allBooks = dealJson.readFromJson();
        const result = allBooks.filter(book => book.bookName.includes(req.body.search));
        res.render('allBooks.hbs', { result, hasBooks: result.length })

    }
    // ////////////////////////////////////////
    // arrange by name////////////////////////
    static arrangeByName = (req, res) => {
        const allBooks = dealJson.readFromJson();
        const result = allBooks.sort((a, b) => (a.bookName > b.bookName) ? 1 : ((b.bookName > a.bookName) ? -1 : 0));
        res.render('allBooks.hbs', { result, hasBooks: result.length })
    }
    // //////////////////////////////////////
    // arrange by pages///////////////////////
    static arrangeByPages = (req, res) => {
        const allBooks = dealJson.readFromJson();
        const result = allBooks.sort((a, b) => parseFloat(a.numOfPages) - parseFloat(b.numOfPages));
        res.render('allBooks.hbs', { result, hasBooks: result.length });
    }
    // ////////////////////////////////////////

}


module.exports = Books;