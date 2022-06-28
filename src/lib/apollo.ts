import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q7z56b3cml01ywbezc6nb1/master',
  cache: new InMemoryCache()
})