<template>
  <div>
   <h2>Add new post</h2>
   <form @submit.prevent="onSubmit()">
      <div class="form-group row">
        <label for="title" class="col-4 col-form-label">Title</label>
        <div class="col-8">
          <div class="input-group">
            <input id="title" name="title" type="text" required="required" minlength="2" class="form-control here" v-model="post.title">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="text" class="col-4 col-form-label">Text</label>
        <div class="col-8">
          <div class="input-group">
            <input id="text" name="text" type="text" required="required" maxlength="300" class="form-control here" v-model="post.text">
          </div>
        </div>
      </div>
       <div class="form-group row">
        <div>
          <button name="submit" type="submit" class="btn btn-success">Submit</button>
        </div>
        <div>
          <button name="reset" type="reset" class="btn btn-danger">Reset</button>
        </div>
      </div>
    </form>
   </div>
</template>

<script>

import { posts } from '../services/Posts'

export default {

    data() {
        return {
           post: {
               title:'',
               text:''
           }
        }
    },

    created() {
        if (this.$route.params.id) {
          posts.get(this.$route.params.id).then(response=>
          (this.post=response.data)).catch(err => console.log(err))
        }
    },
    
    methods: {
        onSubmit()  {
            this.addPost();         
        },

        addPost() {
            posts.add(this.post).then(response=>{this.$router.push
            ('/posts')}).catch(err=>console.log(err))
        }
    }
}
</script>