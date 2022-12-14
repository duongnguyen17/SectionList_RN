import { gql } from "apollo-server-express";

const typeDefs = gql`
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

  input RemoveAuthorsForBookInput {
    bookId: ID!
    authorIds: [ID!]
  }

  input RemoveBooksForAuthorInput {
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
    removeAuthorsForBook(input: RemoveAuthorsForBookInput): Book
    removeBooksForAuthor(input: RemoveBooksForAuthorInput): Author
  }
`;

export default typeDefs;
