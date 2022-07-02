const Book = require("../models/Book");
const { findOneAndUpdate } = require("../models/Category");
const Category = require("../models/Category");

exports.addCategory = async (name) => {
    try {
        const isExist = await Category.findOne({ name });
        if (isExist) {
            return isExist;
        }
        const category = await Category.create({ name });
        return category;
    } catch (error) {
        return error;
    }
}

exports.findCategory = async id => {
    const category = await Category.findById(id);
    return category;
}

exports.getAllCategory = async () => {
    const categories = await Category.find();
    return categories;
}

exports.deleteCategory = async id => {
    try {
        await Category.findByIdAndDelete(id);
        return true;
    } catch (error) {
        return error;
    }
}

exports.addBook = async (bookdata) => {
    const book = await Book.create(bookdata);
    return book;
}

exports.findBook = async id => {
    const book = await Book.findById(id);
    return book;
}

exports.getAllBooks = async () => {
    const books = await Book.find().populate("category").sort({createdAt: "desc"});
    return books;
}

exports.deleteBook = async id => {
    try {
        await Book.findByIdAndDelete(id);
        return true;
    } catch (error) {
        return error;
    }
}

exports.editBook = async (id, data) => {
    try {
        const book = await Book.findOneAndUpdate({ id }, {$set: data}, {
            new: true
        }).exec();
        return book
    } catch (error) {
        return error;
    }
}

