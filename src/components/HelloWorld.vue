<template>
  <div class="hello">
    <ul>
      <li v-for="post in posts" :key="post.id">{{post.title}}
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
  </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  name: 'HelloWorld',
  data(){
    return {
      posts: []
    }
  },
  apollo: {
      getPosts: {
        query: gql`
        query {
          posts {
            title
            content
            id
          }
        }
        `
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
