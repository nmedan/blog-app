<template>
    <div >
            <p><h4>{{ post.title }}</h4></p>
            <p>Text: {{post.text}}</p>
            <p>Created: {{post.createdAt}}</p>
            <hr/>
    </div>
</template>

<script>

import { posts } from '../services/Posts'
export default {
    props:['post'],
    
}
</script>