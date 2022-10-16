import {
  AuthorInput,
  BookInput,
  CreateAuthorInput,
  CreateBookInput,
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
    author: async (parent: any, args: any) => {
      const allAuthors = await Author.find();
      return allAuthors.find((author) => author.id == parent.authorId);
    },
  },
  Author: {
    books: async (parent: any, args: any) => {
      const allBooks = await Book.find();
      return allBooks.filter((book) => book.authorId == parent.id);
    },
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
        const author = await Author.findById(args.input.authorId);

        if (!author) {
          return Error("Tác giả này không có trong hệ thống");
        }
        const newBook = new Book(args.input);
        await newBook.save();
        return { id: newBook._id.toString() };
      } catch (error: any) {
        return Error(error.message);
      }
    },
  },
};

export default resolver;
