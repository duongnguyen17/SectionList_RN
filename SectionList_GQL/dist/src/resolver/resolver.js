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
        authors: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return Promise.all(parent.authors.map((authorId) => __awaiter(void 0, void 0, void 0, function* () { return yield Author_1.default.findById(authorId); })));
        }),
    },
    Author: {
        books: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            return Promise.all(parent.books.map((bookId) => __awaiter(void 0, void 0, void 0, function* () { return yield Book_1.default.findById(bookId); })));
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
                if (!!args.input.authorIds) {
                    yield Promise.all(args.input.authorIds.map((authorId) => __awaiter(void 0, void 0, void 0, function* () {
                        const author = yield Author_1.default.findById(authorId);
                        if (!author) {
                            // throw Error(`Không có tác giả ${authorId} trong hệ thống`);
                            return Error(`Không có tác giả ${authorId} trong hệ thống`);
                        }
                    })));
                }
                const newBook = new Book_1.default(args.input);
                yield newBook.save();
                // thêm sách vào cho các tác giả
                if (!!args.input.authorIds.length) {
                    yield Promise.all(args.input.authorIds.map((authorId) => __awaiter(void 0, void 0, void 0, function* () {
                        const author = yield Author_1.default.findById(authorId);
                        author === null || author === void 0 ? void 0 : author.books.push(newBook.id);
                        yield (author === null || author === void 0 ? void 0 : author.save());
                    })));
                }
                return { id: newBook._id.toString() };
            }
            catch (error) {
                return Error(error.message);
            }
        }),
        addAuthorsForBook: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const book = yield Book_1.default.findById(args.input.bookId);
                if (!book) {
                    // throw Error("Làm gì có sách này");
                    return Error("Làm gì có sách này");
                }
                yield Promise.all(args.input.authorIds.map((authorId) => __awaiter(void 0, void 0, void 0, function* () {
                    const author = yield Author_1.default.findById(authorId);
                    if (!author) {
                        // throw Error(`Làm gì có tác giả ${authorId}`);
                        return Error(`Làm gì có tác giả ${authorId}`);
                    }
                    else {
                        if (book.authors.includes(authorId)) {
                            // throw Error(`Tác giả ${authorId} đã được thêm`);
                            return Error(`Tác giả ${authorId} đã được thêm`);
                        }
                        else {
                            book.authors.push(authorId);
                            author.books.push(book.id);
                            yield book.save();
                            yield author.save();
                        }
                    }
                })));
                return book;
            }
            catch (error) {
                return Error(error.message);
            }
        }),
        addBooksForAuthor: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const author = yield Author_1.default.findById(args.input.authorId);
                if (!author) {
                    throw Error("Làm gì có tác giả này");
                }
                yield Promise.all(args.input.bookIds.map((bookId) => __awaiter(void 0, void 0, void 0, function* () {
                    const book = yield Book_1.default.findById(bookId);
                    if (!book) {
                        throw Error(`Làm gì có sách ${bookId}`);
                    }
                    else {
                        if (author.books.includes(bookId)) {
                            throw Error(`Sách ${bookId} đã được thêm`);
                        }
                        else {
                            author.books.push(bookId);
                            book.authors.push(author.id);
                            yield book.save();
                        }
                    }
                })));
                yield author.save();
                return author;
            }
            catch (error) {
                return Error(error.message);
            }
        }),
    },
};
exports.default = resolver;
