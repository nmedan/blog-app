<template>
   <div class="container mt-4">
    <div class="row">
      <div class="col">
        <AppPosts />
      </div>
    </div>
  </div>
</template>

<script>

import AppPosts from '../components/AppPosts.vue'
export default {
    components: {
        AppPosts
    }
}
</script>