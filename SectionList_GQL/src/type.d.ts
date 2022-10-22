export type BookType = {
  id: String;
  name: String;
  genre: String;
  authors: Array<AuthorType>;
};

export type AuthorType = {
  id: String;
  name: String;
  age: number;
  books: Array<BookType>;
};

export type CreateBookRes = Pick<BookType, "id">;

export type CreateAuthorRes = Pick<AuthorType, "id">;

export type BookInput = Pick<BookType, "id">;

export type AuthorInput = Pick<AuthorType, "id">;

export type CreateBookInput = {
  name: String;
  genre: String;
  authorIds: Array<String!>;
};

export type CreateAuthorInput = {
  name: String;
  age: Int;
};

export type AddAuthorsForBook = {
  bookId: String!;
  authorIds: Array<String!>;
};

export type AddBooksForAuthor = {
  bookIds: Array<String>;
  authorId: String!;
};
