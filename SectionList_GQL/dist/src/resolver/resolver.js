"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Author_1 = __importDefault(require("../models/Author"));
const Book_1 = __importDefault(require("../models/Book"));
const resolver = {
    //Query
    Query: {
        books: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield Book_1.default.find();
        }),
        book: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Book_1.default.findById(args.input.id);
        }),
        authors: () => __awaiter(void 0, void 0, void 0, function* () {
            return yield Author_1.default.find();
        }),
        author: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield Author_1.default.findById(args.input.id);
        }),
    },
    Book: {
        author: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const allAuthors = yield Author_1.default.find();
            return allAuthors.find((author) => author.id == parent.authorId);
        }),
    },
    Author: {
        books: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            const allBooks = yield Book_1.default.find();
            return allBooks.filter((book) => book.authorId == parent.id);
        }),
    },
    // Mutation
    Mutation: {
        createAuthor: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                //kiểm tra nhà văn không được trùng tên
                const allAuthors = yield Author_1.default.find();
                // console.log("allAutohr", allAuthors);
                const isHas = allAuthors.find((author) => author.name === args.input.name);
                if (!!isHas) {
                    return Error("Tác giả này đã có trong hệ thống");
                }
                const newAuthor = new Author_1.default(args.input);
                yield newAuthor.save();
                return { id: newAuthor._id.toString() };
            }
            catch (error) {
                return Error(error.message);
            }
        }),
        createBook: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                //kiểm tra sách không được trùng tên
                const allBooks = yield Book_1.default.find();
                // console.log("allAutohr", allAuthor);
                const isHasBook = allBooks.find((book) => book.name === args.input.name);
                if (!!isHasBook) {
                    return Error("Sách này đã có trong hệ thống");
                }
                //kiểm tra tác giả có trong hệ thống khoong
                const author = yield Author_1.default.findById(args.input.authorId);
                if (!author) {
                    return Error("Tác giả này không có trong hệ thống");
                }
                const newBook = new Book_1.default(args.input);
                yield newBook.save();
                return { id: newBook._id.toString() };
            }
            catch (error) {
                return Error(error.message);
            }
        }),
    },
};
exports.default = resolver;
