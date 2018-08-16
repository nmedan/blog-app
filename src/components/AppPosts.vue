<template>
    <div class="list-group">
       <div v-for="(post, key) in posts" :key="key">
            <p><h4>{{ post.title }}</h4></p>
            <p>{{post.text}}</p>
            <p>{{post.createdAt}} 
                <router-link :to="{ name: 'post-details', params: { id: post.id }}">
                   <button class="btn btn-info">Post View</button>
                </router-link>
                <router-link :to="{ name: 'edit-post', params: { id: post.id }}">
                   <button class="btn btn-primary">Edit</button>
                </router-link>
                <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
            </p>           
            <hr/>
       </div>
    </div>
</template>

<script>

import { posts } from '../services/Posts'
export default {
    props:['posts'],
    methods: { 
       deletePost (id) {        
          posts.delete(id)
          .then(() => {
          this.$emit('postDeleted', id)
          })
        
      }

   }
}
</script>