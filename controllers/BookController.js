const BookService = require("../services/BookService");

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

exports.getSingleCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const category = await BookService.findCategory({ id });
        return res.status(200).send({
            status: true,
            message: "Category returned successfully",
            data: category
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