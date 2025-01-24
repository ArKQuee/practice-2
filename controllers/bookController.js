const Book = require('../models/bookModel');

const createBooks = async (req, res) => {
    try {
        const { title, author, genre, year, available } = req.body;
        const bookTitle = await Book.findOne({ title });
        if(bookTitle) {
            return res.status(400).json({ message: 'Book already exists' });
        }
        const book = new Book({
            title,
            author,
            genre,
            year,
            available
        });

        await book.save();
        res.status(201).json({ message: 'Book created' });

    } catch(error){
        res.status(500).json({ message: error.message });
    }
} 


const updateBook = async (req, res) => {
    try {
        const books = await Book.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: 'Book updated' });

    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({ message: 'Book deleted' });
    } catch(error) {
        res.status(500).json({ message: error.message });
    }
}

const getBooks = async (req, res) => {
    try {

        const books = await Book.find();
        res.status(200).json({data: books});

    }catch(error) {
        res.status(500).json({ message: error.message });
    }
}

const getBookByID = async (req, res) => {
    try {
        const id = req.params.id;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(200).json({data: book});

    } catch(error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = { createBooks, getBooks, getBookByID, updateBook, deleteBook };