import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/client";
import { setContext } from "apollo-link-context";
const token = process.env.REACT_APP_CONTENTFUL_CPA;
const space = process.env.REACT_APP_CONTENTFUL_SPACE_ID;

const authLink = setContext((_, { headers }) => ({
  headers: { ...headers, authorization: token ? `Bearer ${token}` : "" },
}));
const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${space}/environments/master`,
});
const client = new ApolloClient({ cache, link: authLink.concat(link) });

export const ApolloContainer = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
