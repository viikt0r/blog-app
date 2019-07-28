
import Vue from 'vue'
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

const httpLink = new HttpLink({
  uri: 'http://192.168.99.100:8080/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'viktor'
  }
})

const wsLink = new WebSocketLink({
  uri: 'ws://192.168.99.100:8080/v1/graphql',
  options: {
    reconnect: true,
    connectionParams(){
      return {
        headers: {
          'x-hasura-admin-secret': 'viktor'
        }
      }
    }
  }
})

const link = split(({ query }) => {
  const { kind, operation } = getMainDefinition(query)
  return kind === 'OperationDefinition' && operation === 'subscription'
}, wsLink, httpLink)


const cache = new InMemoryCache();


Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  link,
  cache
})


export function createProvider(){
  return new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
      $loadingKey: "loading"
    }
  })
}