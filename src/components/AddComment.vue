<template>
   <div>
     <div class="list-group">
       <h4>Comments:</h4>
       <div v-for="(comment, key) in post.comments" :key="key">
         <p>{{comment.text}}</p>
         <p>{{comment.createdAt | diffForHumans}}</p>
         <hr/>
       </div>
     </div>
    <div>
      <h4>Add new comment:</h4>
   <form @submit.prevent="onSubmit()">
      <div class="form-group row">
        <label for="text" class="col-4 col-form-label">Text</label>
        <div class="col-8">
          <div class="input-group">
            <input id="text" name="text" type="text" required="required" class="form-control here" v-model="comment.text">
          </div>
        </div>
      </div>
       <div class="form-group row">
        <div>
          <button name="submit" type="submit" class="btn btn-success">Submit</button>
        </div>
      </div>
    </form>
    </div>
   </div>
</template>

<script>

import { posts } from '../services/Posts'
import { mixin1 } from '../mixins/my-mixins'
export default {
    props:['post'],
    mixins:[mixin1],
    data() {
        return {
           comment: {
		        text:''
           },
        }
    },
    
    methods: {
        onSubmit()  {
            this.addComment();  
        },

        addComment() {          
            posts.addComment(this.comment, this.post.id).then(() => {
            this.$emit('commentCreated')
            })
                        
        }

    }
}
</script>
