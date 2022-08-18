import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://venia.magento.com/graphql",
    cache: new InMemoryCache()
});

export default client;
