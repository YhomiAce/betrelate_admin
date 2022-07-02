const { body, validationResult } = require("express-validator");

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors
    });
};

const bookRequestValidation = () => {
    return [
        body("title", "Book title is required").notEmpty(),
        body("description", "Book description is required").notEmpty(),
        body("author", "Book author name is required").notEmpty(),
        body("publishers", "Book publishers name is required").notEmpty(),
        body("category", "Book categories is required").isArray()
    ];
};

const categoryRequestValidation = () => {
    return [
        body("name", "category name is required").notEmpty()
    ];
};

module.exports = {
    validate,
    bookRequestValidation,
    categoryRequestValidation
}