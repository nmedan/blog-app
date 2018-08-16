<template>
    <div >
        <SinglePost :post="post"/>
    </div>
</template>
<script>

import { posts } from '../services/Posts'
import SinglePost from '../components/SinglePost'
export default {
    components: {
        SinglePost
    },

    data() {
        return {
           post: {
               title:'',
               text:'',
               createdAt:''
           }
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