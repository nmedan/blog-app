<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/posts">Blog App</router-link>
    <div class="navbar-nav">
           <router-link class="nav-item nav-link" to="/posts">Posts</router-link>
           <router-link class="nav-item nav-link" to="/add">Add post</router-link>
    </div>
  </nav>
</template>

<script>
export default {
    
}
</script>