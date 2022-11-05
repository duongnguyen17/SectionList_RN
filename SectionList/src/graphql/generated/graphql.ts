import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AddAuthorsForBookInput = {
  authorIds?: InputMaybe<Array<Scalars['ID']>>;
  bookId: Scalars['ID'];
};

export type AddBooksForAuthorInput = {
  authorId: Scalars['ID'];
  bookIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type Author = {
  __typename?: 'Author';
  age?: Maybe<Scalars['Int']>;
  books?: Maybe<Array<Maybe<Book>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type AuthorInput = {
  id: Scalars['ID'];
};

export type Book = {
  __typename?: 'Book';
  authors?: Maybe<Array<Maybe<Author>>>;
  genre?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type BookInput = {
  id: Scalars['ID'];
};

export type CreateAuthorInput = {
  age?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateAuthorRes = {
  __typename?: 'CreateAuthorRes';
  id?: Maybe<Scalars['ID']>;
};

export type CreateBookInput = {
  authorIds?: InputMaybe<Array<Scalars['ID']>>;
  genre?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type CreateBookRes = {
  __typename?: 'CreateBookRes';
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAuthorsForBook?: Maybe<Book>;
  addBooksForAuthor?: Maybe<Author>;
  createAuthor?: Maybe<CreateAuthorRes>;
  createBook?: Maybe<CreateBookRes>;
  removeAuthorsForBook?: Maybe<Book>;
  removeBooksForAuthor?: Maybe<Author>;
};

export type MutationAddAuthorsForBookArgs = {
  input?: InputMaybe<AddAuthorsForBookInput>;
};

export type MutationAddBooksForAuthorArgs = {
  input?: InputMaybe<AddBooksForAuthorInput>;
};

export type MutationCreateAuthorArgs = {
  input?: InputMaybe<CreateAuthorInput>;
};

export type MutationCreateBookArgs = {
  input?: InputMaybe<CreateBookInput>;
};

export type MutationRemoveAuthorsForBookArgs = {
  input?: InputMaybe<RemoveAuthorsForBookInput>;
};

export type MutationRemoveBooksForAuthorArgs = {
  input?: InputMaybe<RemoveBooksForAuthorInput>;
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
};

export type QueryAuthorArgs = {
  input?: InputMaybe<AuthorInput>;
};

export type QueryBookArgs = {
  input?: InputMaybe<BookInput>;
};

export type RemoveAuthorsForBookInput = {
  authorIds?: InputMaybe<Array<Scalars['ID']>>;
  bookId: Scalars['ID'];
};

export type RemoveBooksForAuthorInput = {
  authorId: Scalars['ID'];
  bookIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type GetAuthorsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAuthorsQuery = {
  __typename?: 'Query';
  authors?: Array<{
    __typename?: 'Author';
    name?: string | null;
    id?: string | null;
    age?: number | null;
    books?: Array<{ __typename?: 'Book'; name?: string | null; genre?: string | null } | null> | null;
  } | null> | null;
};

export type GetAuthorQueryVariables = Exact<{
  input?: InputMaybe<AuthorInput>;
}>;

export type GetAuthorQuery = {
  __typename?: 'Query';
  author?: {
    __typename?: 'Author';
    id?: string | null;
    name?: string | null;
    age?: number | null;
    books?: Array<{ __typename?: 'Book'; id?: string | null; name?: string | null; genre?: string | null } | null> | null;
  } | null;
};

export type GetBookQueryVariables = Exact<{
  input?: InputMaybe<BookInput>;
}>;

export type GetBookQuery = {
  __typename?: 'Query';
  book?: {
    __typename?: 'Book';
    id?: string | null;
    name?: string | null;
    genre?: string | null;
    authors?: Array<{ __typename?: 'Author'; name?: string | null; age?: number | null } | null> | null;
  } | null;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetBooksQuery = {
  __typename?: 'Query';
  books?: Array<{
    __typename?: 'Book';
    id?: string | null;
    name?: string | null;
    genre?: string | null;
    authors?: Array<{ __typename?: 'Author'; name?: string | null; age?: number | null } | null> | null;
  } | null> | null;
};

export const GetAuthorsDocument = gql`
  query getAuthors {
    authors {
      name
      id
      age
      books {
        name
        genre
      }
    }
  }
`;
export const GetAuthorDocument = gql`
  query getAuthor($input: AuthorInput) {
    author(input: $input) {
      id
      name
      age
      books {
        id
        name
        genre
      }
    }
  }
`;
export const GetBookDocument = gql`
  query getBook($input: BookInput) {
    book(input: $input) {
      id
      name
      genre
      authors {
        name
        age
      }
    }
  }
`;
export const GetBooksDocument = gql`
  query getBooks {
    books {
      id
      name
      genre
      authors {
        name
        age
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAuthors(variables?: GetAuthorsQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetAuthorsQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAuthorsQuery>(GetAuthorsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getAuthors',
        'query',
      );
    },
    getAuthor(variables?: GetAuthorQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetAuthorQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAuthorQuery>(GetAuthorDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getAuthor',
        'query',
      );
    },
    getBook(variables?: GetBookQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetBookQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBookQuery>(GetBookDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getBook',
        'query',
      );
    },
    getBooks(variables?: GetBooksQueryVariables, requestHeaders?: Dom.RequestInit['headers']): Promise<GetBooksQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBooksQuery>(GetBooksDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }),
        'getBooks',
        'query',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
