import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o3v0dq0eql01xm9v1c1at0/master',
  cache: new InMemoryCache(),
});
