const Book = require("../models/Book");
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
    const book = await Book.findById(id).populate("category", "name");
    return book;
}

exports.getAllBooks = async () => {
    const books = await Book.find().populate("category", "name").sort({ createdAt: "desc" });
    return books;
}

exports.getAllBooksAvailable = async () => {
    const books = await Book.find({ status: "available" }).populate("category", "name").sort({ createdAt: "desc" });
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
        Book.findOneAndUpdate({ _id: id }, {$set:data}, { new: true }).then(book => {
            book.save();
            return book
        }).catch(err => {
            return err;
        })
    } catch (error) {
        return error;
    }
}

