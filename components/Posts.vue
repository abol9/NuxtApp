<template>
<div class="d-flex flex-row mb-3 mt-4">
  <v-row class="mb-3" >
    <v-col xs="12" sm="6" md="4" lg="3" v-for="post of posts" :key="post.id" >
      <Post class="ma-1" :post="post" :hasuser="hasuser" />
    </v-col>
  </v-row>
</div>
</template>
<script>
import Post from '@/components/Post';
export default {
  components:{
    Post
  },
  props:{
    posts:{
      type:Array,
      required:true
    },
    hasuser:{
      type:Boolean,
      required:false,
      default:false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>