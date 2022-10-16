export type Book = {
  id: String;
  name: String;
  genre: String;
  author: Author;
};

export type Author = {
  id: String;
  name: String;
  age: number;
  books: Array<Book>;
};

export type CreateBookRes = Pick<Book, "id">;

export type CreateAuthorRes = Pick<Author, "id">;

export type BookInput = Pick<Book, "id">;

export type AuthorInput = Pick<Author, "id">;

export type CreateBookInput = {
  name: String;
  genre: String;
  authorId: String!;
};

export type CreateAuthorInput = {
  name: String;
  age: Int;
};
