"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Schema = mongoose_1.Schema;
const BookSchema = new Schema({
    name: {
        type: String,
    },
    genre: {
        type: String,
    },
    authors: {
        type: [Schema.Types.ObjectId],
    },
});
exports.default = (0, mongoose_1.model)("book", BookSchema);
