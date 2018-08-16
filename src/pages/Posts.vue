<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
        <AppPosts :posts="posts" @postDeleted="deletePost"/>
      </div>
    </div>
  </div>
</template>

<script>

import AppPosts from '../components/AppPosts.vue'
import {posts} from '../services/Posts'
export default {
    components: {
        AppPosts
    },

    data() {
        return {
           posts:[]
        }
    },

    beforeRouteEnter (to, from, next) {
        posts.getAll()
        .then((response) => {
            next((vm) => {
                vm.posts = response.data
            })
        })
    },
    
    methods: {
        deletePost(id) {
          let index = this.posts.findIndex(post => post.id === id);
          this.posts.splice(index, 1);
        }    
    }
}
</script>