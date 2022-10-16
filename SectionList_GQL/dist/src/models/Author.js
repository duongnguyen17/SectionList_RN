"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Schema = mongoose_1.Schema;
const AuthorSchema = new Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
});
exports.default = (0, mongoose_1.model)("author", AuthorSchema);
