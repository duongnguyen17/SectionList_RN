import {
  AddAuthorsForBook,
  AddBooksForAuthor,
  AuthorType,
  AuthorInput,
  BookInput,
  CreateAuthorInput,
  CreateBookInput,
  BookType,
  RemoveAuthorsForBook,
  RemoveBooksForAuthor,
} from "./../type.d";
import Author from "../models/Author";
import Book from "../models/Book";

const resolver = {
  //Query
  Query: {
    books: async () => {
      return await Book.find();
    },
    book: async (parent: any, args: { input: BookInput }) => {
      return await Book.findById(args.input.id);
    },
    authors: async () => {
      return await Author.find();
    },
    author: async (parent: any, args: { input: AuthorInput }) => {
      return await Author.findById(args.input.id);
    },
  },
  Book: {
    authors: async (parent: BookType, args: any) =>
      Promise.all(
        parent.authors.map(async (authorId) => await Author.findById(authorId))
      ),
  },
  Author: {
    books: async (parent: AuthorType, args: any) =>
      Promise.all(
        parent.books.map(async (bookId) => await Book.findById(bookId))
      ),
  },

  // Mutation
  Mutation: {
    createAuthor: async (parent: any, args: { input: CreateAuthorInput }) => {
      try {
        //kiểm tra nhà văn không được trùng tên
        const allAuthors = await Author.find();
        // console.log("allAutohr", allAuthors);
        const isHas = allAuthors.find(
          (author) => author.name === args.input.name
        );
        if (!!isHas) {
          return Error("Tác giả này đã có trong hệ thống");
        }
        const newAuthor = new Author(args.input);
        await newAuthor.save();
        return { id: newAuthor._id.toString() };
      } catch (error: any) {
        return Error(error.message);
      }
    },
    createBook: async (parent: any, args: { input: CreateBookInput }) => {
      try {
        //kiểm tra sách không được trùng tên
        const allBooks = await Book.find();
        // console.log("allAutohr", allAuthor);
        const isHasBook = allBooks.find(
          (book) => book.name === args.input.name
        );
        if (!!isHasBook) {
          return Error("Sách này đã có trong hệ thống");
        }
        //kiểm tra tác giả có trong hệ thống khoong
        if (!!args.input.authorIds) {
          await Promise.all(
            args.input.authorIds.map(async (authorId) => {
              const author = await Author.findById(authorId);
              if (!author) {
                // throw Error(`Không có tác giả ${authorId} trong hệ thống`);
                return Error(`Không có tác giả ${authorId} trong hệ thống`);
              }
            })
          );
        }
        const newBook = new Book(args.input);
        await newBook.save();
        // thêm sách vào cho các tác giả
        if (!!args.input.authorIds.length) {
          await Promise.all(
            args.input.authorIds.map(async (authorId) => {
              const author = await Author.findById(authorId);
              author?.books.push(newBook.id);
              await author?.save();
            })
          );
        }

        return { id: newBook._id.toString() };
      } catch (error: any) {
        return Error(error.message);
      }
    },
    addAuthorsForBook: async (
      parent: any,
      args: {
        input: AddAuthorsForBook;
      }
    ) => {
      try {
        const book = await Book.findById(args.input.bookId);
        if (!book) {
          // throw Error("Làm gì có sách này");
          return Error("Làm gì có sách này");
        }
        await Promise.all(
          args.input.authorIds.map(async (authorId) => {
            const author = await Author.findById(authorId);
            if (!author) {
              // throw Error(`Làm gì có tác giả ${authorId}`);
              return Error(`Làm gì có tác giả ${authorId}`);
            } else {
              if (book.authors.includes(authorId)) {
                // throw Error(`Tác giả ${authorId} đã được thêm`);
                return Error(`Tác giả ${authorId} đã được thêm`);
              } else {
                book.authors.push(authorId);
                author.books.push(book.id);
                await book.save();
                await author.save();
              }
            }
          })
        );

        return book;
      } catch (error: any) {
        return Error(error.message);
      }
    },

    addBooksForAuthor: async (
      parent: any,
      args: {
        input: AddBooksForAuthor;
      }
    ) => {
      try {
        const author = await Author.findById(args.input.authorId);
        if (!author) {
          throw Error("Làm gì có tác giả này");
        }
        await Promise.all(
          args.input.bookIds.map(async (bookId) => {
            const book = await Book.findById(bookId);
            if (!book) {
              throw Error(`Làm gì có sách ${bookId}`);
            } else {
              if (author.books.includes(bookId)) {
                throw Error(`Sách ${bookId} đã được thêm`);
              } else {
                author.books.push(bookId);
                book.authors.push(author.id);
                await book.save();
              }
            }
          })
        );
        await author.save();
        return author;
      } catch (error: any) {
        return Error(error.message);
      }
    },
    removeAuthorsForBook: async (
      parent: any,
      args: {
        input: RemoveAuthorsForBook;
      }
    ) => {
      try {
        const book = await Book.findById(args.input.bookId);
        if (!book) {
          // throw Error("Làm gì có sách này");
          return Error("Làm gì có sách này");
        }
        await Promise.all(
          args.input.authorIds.map(async (authorId) => {
            const author = await Author.findById(authorId);
            if (!author) {
              // throw Error(`Làm gì có tác giả ${authorId}`);
              return Error(`Làm gì có tác giả ${authorId}`);
            } else {
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

                await author.save();
              } else {
                // throw Error(`Tác giả ${authorId} không phải là tác giả của cuốn sách này`);
                return Error(
                  `Tác giả ${authorId} không phải là tác giả của cuốn sách này`
                );
              }
            }
          })
        );
        await book.save();
        return book;
      } catch (error: any) {
        return Error(error.message);
      }
    },

    removeBooksForAuthor: async (
      parent: any,
      args: {
        input: RemoveBooksForAuthor;
      }
    ) => {
      try {
        const author = await Author.findById(args.input.authorId);
        if (!author) {
          throw Error("Làm gì có tác giả này");
        }
        await Promise.all(
          args.input.bookIds.map(async (bookId) => {
            const book = await Book.findById(bookId);
            if (!book) {
              // throw Error(`Làm gì có sách ${bookId}`);
              return Error(`Làm gì có sách ${bookId}`);
            } else {
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

                await book.save();
                await author.save();
              } else {
                // throw Error(`Cuốn ${bookId} không phải là của tác giả này`);
                return Error(`Cuốn ${bookId} không phải là của tác giả này`);
              }
            }
          })
        );
        return author;
      } catch (error: any) {
        return Error(error.message);
      }
    },
  },
};

export default resolver;
