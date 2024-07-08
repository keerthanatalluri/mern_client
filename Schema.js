//schema.js
//create a schema using GQL
/**const { gql } = require('apollo-server-express');
const typeDefs = gql`
type User {
    id:ID!,
    name:String!,
    email:String!,
    password:String!
}
type Query {
    getUser(id:ID!):User
    getUsers:[User]
    searchUsers(name:String!):[User]
    getLimitedUser(limit:Int!,offset:Int!):[User]
}
input createUserInput{
    name:String!,
    email:String!,
    password:String!
}
input updateUser{
    name:String!,
    email:String!,
    password:String!


}
type Mutation{
    createUser(input:createUserInput!):User
    changePass(id:ID!,password:String!):User
    updateUser(id:ID!,input:updateUser!):User
    deleteUser(id:ID!):User
}
`;
module.exports= typeDefs;//export out**/
const { gql } = require('apollo-server-express');
const typeDefs = gql`
type User {
    id:ID!,
    name:String!,
    email:String!,
    password:String!
}
    input createUserInput{
    name:String!,
    email:String!,
    password:String!
}
    type Query {
    getUser(id:ID!):User,
}
   type Mutation{
    createUser(input:createUserInput!):User
    changePass(id:ID!,password:String!):User 
}
    `;
    module.exports=typeDefs;