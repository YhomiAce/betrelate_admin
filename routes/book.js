const express = require("express");
const router = express.Router();
const BookController = require("../controllers/BookController");
const {
    validate,
    bookRequestValidation,
    categoryRequestValidation
} = require("../helpers/validator");

router.route("/book/category")
    .post(categoryRequestValidation(), validate, BookController.createcategory)
    .get(BookController.fetchAllCategory)

router.route("/book/category/:id")
.get(BookController.getSingleCategory)
.delete(BookController.deleteCategory)

router.route("/book")
    .post(bookRequestValidation(), validate, BookController.createBook)
    .get(BookController.fetchAllBooks)


router.route("/book/:id")
.get(BookController.getSingleBook)
.patch(BookController.updateBook)
.delete(BookController.deleteBook)

module.exports = router;