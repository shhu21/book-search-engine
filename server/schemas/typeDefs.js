const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Query {
    me: User
    users: [User]
    user(username: String!): User
}

type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: Int
    authors: [String]
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    adduser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String]!, description: String!, title: String!, bookId: ID!, image: String!, link: String!): User
    removeBook(bookId: ID!): User
}
`;

module.exports = typeDefs;