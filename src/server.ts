import { ApolloServer } from '@apollo/server';
import { readFileSync } from 'fs';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda'; //highlight-line

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

function createExpense () {

}

const resolvers = {
    Query: {
        hello: () => 'worldd',
    },
    Mutation: {
        createExpense
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

// This final export is important!
export const graphqlHandler = startServerAndCreateLambdaHandler(server); //highlight-line

// TODO: add linting