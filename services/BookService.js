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

exports.findCategory = async where => {
    const category = await Category.findOne(where);
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

exports.findBook = async where => {
    const book = await Book.findOne(where);
    return book;
}

exports.getAllBooks = async () => {
    const books = await Book.find();
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

exports.updateBook = async (id, data) => {
    try {
        const filter = { id };
        const category = await findOneAndUpdate(filter, data, {
            new: true,
            upsert: true
        });
    } catch (error) {
        return error;
    }
}

