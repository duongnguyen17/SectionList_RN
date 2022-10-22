"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Book {
    id: ID
    name: String
    genre: String
    authors: [Author]
  }

  type Author {
    id: ID
    name: String
    age: Int
    books: [Book]
  }

  type CreateBookRes {
    id: ID
  }

  type CreateAuthorRes {
    id: ID
  }

  input BookInput {
    id: ID!
  }

  input AuthorInput {
    id: ID!
  }

  input CreateBookInput {
    name: String
    genre: String
    authorIds: [ID!]
  }

  input CreateAuthorInput {
    name: String
    age: Int
  }

  input AddAuthorsForBookInput {
    bookId: ID!
    authorIds: [ID!]
  }

  input AddBooksForAuthorInput {
    bookIds: [ID!]
    authorId: ID!
  }

  # ROOT TYPE
  type Query {
    books: [Book]
    book(input: BookInput): Book
    authors: [Author]
    author(input: AuthorInput): Author
  }

  type Mutation {
    createAuthor(input: CreateAuthorInput): CreateAuthorRes
    createBook(input: CreateBookInput): CreateBookRes
    addAuthorsForBook(input: AddAuthorsForBookInput): Book
    addBooksForAuthor(input: AddBooksForAuthorInput): Author
  }
`;
exports.default = typeDefs;
