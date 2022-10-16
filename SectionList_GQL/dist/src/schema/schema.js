"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
  type Book {
    id: ID
    name: String
    genre: String
    author: Author
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
    authorId: ID!
  }

  input CreateAuthorInput {
    name: String
    age: Int
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
  }
`;
exports.default = typeDefs;
