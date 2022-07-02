const BookService = require("../services/BookService");

exports.createBook = async (req, res, next) => {
    try {
        const {
            title,
            description,
            author,
            publishers,
            category,
        } = req.body;
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
        const books = await BookService.getAllBooks();
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