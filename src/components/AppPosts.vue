<template>
    <div class="list-group">
       <div v-for="(post, key) in posts" :key="key">
            <p><h4>{{ post.title }}</h4></p>
            <p>{{post.text}}</p>
            <p>{{post.createdAt}} 
                <router-link :to="{ name: 'post-details', params: { id: post.id }}">
                    Post View
                </router-link>
            </p>           
            <hr/>
       </div>
    </div>
</template>

<script>

import { posts } from '../services/Posts'
export default {
    props:['posts']
}
</script>