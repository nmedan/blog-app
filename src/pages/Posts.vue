<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
        <AppPosts :posts="posts"/>
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
    }
}
</script>