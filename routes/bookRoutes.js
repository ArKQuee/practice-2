const express = require('express');
const { createBooks, getBooks, getBookByID, updateBook, deleteBook } = require('../controllers/bookController');
const router = express.Router();

router.post ('/create', createBooks);
router.get ('/get', getBooks);
router.get ('/get/:id', getBookByID);
router.put ('/update/:id', updateBook);
router.delete ('/delete/:id', deleteBook);

module.exports = router;