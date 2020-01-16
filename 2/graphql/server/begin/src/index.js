import { typeDefs } from "./schema";
import { ApolloServer, makeExecutableSchema } from "apollo-server";
import { driver } from "./neo4jdriver";
import { resolvers } from "./resolvers";
import dotenv from "dotenv";

// set environment variables from ../.env
dotenv.config();

// Required: Export the GraphQL.js schema object as "schema"
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const server = new ApolloServer({
    context: ({ req }) => { return { driver } },
    schema: schema
});

server.listen(process.env.GRAPHQL_LISTEN_PORT, "0.0.0.0").then(({ url }) => {
    console.log(`GraphQL API ready at ${url}`);
});