const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  author: {
    type: String,
    required: true
  },
  publishers: {
    type: String,
    required: true
  },
  category: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: "category",
      }
    ]
  },
  status: {
    type: String,
    enum: ["available", "unavailable"],
    default: "available"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Book = mongoose.model("book", BookSchema);
