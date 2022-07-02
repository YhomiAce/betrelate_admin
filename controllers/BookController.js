const Book = require("../models/Book");
const BookService = require("../services/BookService");
const Services = require("../services/ClientService")

exports.createBook = async (req, res, next) => {
    try {
        const book = await BookService.addBook(req.body);
        return res.status(201).send({
            status: true,
            message: "Book added successfully",
            data: book
        });

    } catch (error) {
        return next(error);
    }
}

exports.createcategory = async (req, res, next) => {
    try {
        const { name } = req.body;
        const category = await BookService.addCategory(name);
        return res.status(201).send({
            status: true,
            message: "Category added successfully",
            data: category
        });

    } catch (error) {
        return next(error);
    }
}

exports.fetchAllCategory = async (req, res, next) => {
    try {
        const categories = await BookService.getAllCategory();
        return res.status(200).send({
            status: true,
            message: "Category returned successfully",
            data: categories
        });

    } catch (error) {
        return next(error);
    }
}

exports.fetchAllBooks = async (req, res, next) => {
    try {
        const query = req.query;
        var queryCond = {}
        if (query.title) {
            queryCond.title = { $regex: query.title, $options: "i" };
        }
        if (query.publishers) {
            queryCond.publishers = { $regex: query.publishers, $options: "i" };
        }
        if (query.author) {
            queryCond.author = { $regex: query.author, $options: "i" };
        }
        const books = await Book.find(queryCond).populate({
            path: "category.name",
            "match": { "name": { $regex: query.name, $options: "i" } }
        })
        // const books = await BookService.getAllBooks();
        return res.status(200).send({
            status: true,
            message: "Books returned successfully",
            data: books
        });

    } catch (error) {
        return next(error);
    }
}

exports.fetchAllAvailableBooks = async (req, res, next) => {
    try {
        const books = await BookService.getAllBooksAvailable();
        return res.status(200).send({
            status: true,
            message: "Books returned successfully",
            data: books
        });

    } catch (error) {
        return next(error);
    }
}

exports.getSingleCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await BookService.findCategory(id);
        return res.status(200).send({
            status: true,
            message: "Category returned successfully",
            data: category
        });

    } catch (error) {
        return next(error);
    }
}

exports.getSingleBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const book = await BookService.findBook(id);
        return res.status(200).send({
            status: true,
            message: "Book returned successfully",
            data: book
        });

    } catch (error) {
        return next(error);
    }
}

exports.deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        await BookService.deleteCategory(id);
        return res.status(200).send({
            status: true,
            message: "Category deleted successfully"
        });

    } catch (error) {
        return next(error);
    }
}

exports.deleteBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        await BookService.deleteBook(id);
        return res.status(200).send({
            status: true,
            message: "Book deleted successfully"
        });

    } catch (error) {
        return next(error);
    }
}

exports.updateBook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const book = await BookService.editBook(id, data);
        return res.status(200).send({
            status: true,
            message: "Book updated successfully",
            data: book
        });

    } catch (error) {
        return next(error);
    }
}

exports.getAllEnrolledUsers = async (req, res, next) => {
    try {
        const users = await Services.Client.getAllEnrolledUsers()
        return res.status(200).send({
            status: true,
            message: "All users",
            data: users
        });

    } catch (error) {
        return next(error);
    }
}

exports.getAllUsersWithBooksBorrowed = async (req, res, next) => {
    try {
        const users = await Services.Client.getAllEnrolledUsers();
        return res.status(200).send({
            status: true,
            message: "All users",
            data: users
        });

    } catch (error) {
        return next(error);
    }
}