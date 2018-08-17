<template>
    <div class="container mt-4">
      <SinglePost :post="post"></SinglePost>
      <AddComment :post="post"></AddComment>
    </div>
</template>
<script>

import { posts } from '../services/Posts'
import SinglePost from '../components/SinglePost'
import AddComment from '../components/AddComment'
export default {
    components: {
        SinglePost,
        AddComment
    },

    data() {
        return {
           post: {
               title:'',
               text:'',

           },
        }
    },
    
    created() {
        if (this.$route.params.id) {
          posts.get(this.$route.params.id).then(response=>
          (this.post=response.data)).catch(err => console.log(err))
        }
    }

}
</script>