<template>
  <div class="hello">
    
      <ApolloQuery :query="require('../graphql/getPosts.gql')"
      :variables="{limit: 1}">
      <template slot-scope="{result: { data, error, loading }}">
      <div v-if="loading">Loading...</div>
      <div v-else-if="error">Error...</div>
      <ul v-else-if="data"> 
          <li v-for="post in data.posts" :key="post.id">{{post.title}}
            <div>
              {{post.id}}
            </div>
            <div>
              {{post.title}}
            </div>
            <div>
              {{post.content}}
            </div>
          </li>
        </ul>
        </template>
      </ApolloQuery>    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      loading: 0,
      posts: []
    }
  },
  
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
