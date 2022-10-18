const {  ApolloServer } = require("apollo-server");



const server = new ApolloServer({typeDefs, resolvers});

server.lister().then(({ url })=> {
  console.log(`Your API is running at: ${url}`)
})