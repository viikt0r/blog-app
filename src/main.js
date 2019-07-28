import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.config.productionTip = false

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  uri: 'http://192.168.99.100:8080/v1/graphql',
  headers: {
    'x-hasura-admin-secret': 'viktor'
  }
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingkey: "loading"
  }    
})

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
