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
                //ki???m tra nh?? v??n kh??ng ???????c tr??ng t??n
                const allAuthors = yield Author_1.default.find();
                // console.log("allAutohr", allAuthors);
                const isHas = allAuthors.find((author) => author.name === args.input.name);
                if (!!isHas) {
                    return Error("T??c gi??? n??y ???? c?? trong h??? th???ng");
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
                //ki???m tra s??ch kh??ng ???????c tr??ng t??n
                const allBooks = yield Book_1.default.find();
                // console.log("allAutohr", allAuthor);
                const isHasBook = allBooks.find((book) => book.name === args.input.name);
                if (!!isHasBook) {
                    return Error("S??ch n??y ???? c?? trong h??? th???ng");
                }
                //ki???m tra t??c gi??? c?? trong h??? th???ng khoong
                if (!!args.input.authorIds) {
                    yield Promise.all(args.input.authorIds.map((authorId) => __awaiter(void 0, void 0, void 0, function* () {
                        const author = yield Author_1.default.findById(authorId);
                        if (!author) {
                            // throw Error(`Kh??ng c?? t??c gi??? ${authorId} trong h??? th???ng`);
                            return Error(`Kh??ng c?? t??c gi??? ${authorId} trong h??? th???ng`);
                        }
                    })));
                }
                const newBook = new Book_1.default(args.input);
                yield newBook.save();
                // th??m s??ch v??o cho c??c t??c gi???
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
                    // throw Error("L??m g?? c?? s??ch n??y");
                    return Error("L??m g?? c?? s??ch n??y");
                }
                yield Promise.all(args.input.authorIds.map((authorId) => __awaiter(void 0, void 0, void 0, function* () {
                    const author = yield Author_1.default.findById(authorId);
                    if (!author) {
                        // throw Error(`L??m g?? c?? t??c gi??? ${authorId}`);
                        return Error(`L??m g?? c?? t??c gi??? ${authorId}`);
                    }
                    else {
                        if (book.authors.includes(authorId)) {
                            // throw Error(`T??c gi??? ${authorId} ???? ???????c th??m`);
                            return Error(`T??c gi??? ${authorId} ???? ???????c th??m`);
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
                    throw Error("L??m g?? c?? t??c gi??? n??y");
                }
                yield Promise.all(args.input.bookIds.map((bookId) => __awaiter(void 0, void 0, void 0, function* () {
                    const book = yield Book_1.default.findById(bookId);
                    if (!book) {
                        throw Error(`L??m g?? c?? s??ch ${bookId}`);
                    }
                    else {
                        if (author.books.includes(bookId)) {
                            throw Error(`S??ch ${bookId} ???? ???????c th??m`);
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
        removeAuthorsForBook: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const book = yield Book_1.default.findById(args.input.bookId);
                if (!book) {
                    // throw Error("L??m g?? c?? s??ch n??y");
                    return Error("L??m g?? c?? s??ch n??y");
                }
                yield Promise.all(args.input.authorIds.map((authorId) => __awaiter(void 0, void 0, void 0, function* () {
                    const author = yield Author_1.default.findById(authorId);
                    if (!author) {
                        // throw Error(`L??m g?? c?? t??c gi??? ${authorId}`);
                        return Error(`L??m g?? c?? t??c gi??? ${authorId}`);
                    }
                    else {
                        if (book.authors.includes(authorId)) {
                            // remove authorId from book.authors
                            const iAuthor = book.authors.indexOf(authorId);
                            if (iAuthor > -1) {
                                book.authors.splice(iAuthor, 1);
                            }
                            // remove bookId from author.books
                            const iBook = author.books.indexOf(book.id);
                            if (iBook > -1) {
                                author.books.splice(iBook, 1);
                            }
                            yield author.save();
                        }
                        else {
                            // throw Error(`T??c gi??? ${authorId} kh??ng ph???i l?? t??c gi??? c???a cu???n s??ch n??y`);
                            return Error(`T??c gi??? ${authorId} kh??ng ph???i l?? t??c gi??? c???a cu???n s??ch n??y`);
                        }
                    }
                })));
                yield book.save();
                return book;
            }
            catch (error) {
                return Error(error.message);
            }
        }),
        removeBooksForAuthor: (parent, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const author = yield Author_1.default.findById(args.input.authorId);
                if (!author) {
                    throw Error("L??m g?? c?? t??c gi??? n??y");
                }
                yield Promise.all(args.input.bookIds.map((bookId) => __awaiter(void 0, void 0, void 0, function* () {
                    const book = yield Book_1.default.findById(bookId);
                    if (!book) {
                        // throw Error(`L??m g?? c?? s??ch ${bookId}`);
                        return Error(`L??m g?? c?? s??ch ${bookId}`);
                    }
                    else {
                        if (author.books.includes(bookId)) {
                            // remove book from author.books
                            const iBook = author.books.indexOf(bookId);
                            if (iBook > -1) {
                                book.authors.splice(iBook, 1);
                            }
                            // remove author from book
                            const iAuthor = book.authors.indexOf(author.id);
                            if (iAuthor > -1) {
                                book.authors.splice(iAuthor, 1);
                            }
                            yield book.save();
                            yield author.save();
                        }
                        else {
                            // throw Error(`Cu???n ${bookId} kh??ng ph???i l?? c???a t??c gi??? n??y`);
                            return Error(`Cu???n ${bookId} kh??ng ph???i l?? c???a t??c gi??? n??y`);
                        }
                    }
                })));
                return author;
            }
            catch (error) {
                return Error(error.message);
            }
        }),
    },
};
exports.default = resolver;
