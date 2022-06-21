import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4og711s03iv01xsbmz7fai9/master',
  cache: new InMemoryCache(),
})
