<template>
  <div>
    <Card path="posts" :item="post" :hasuser="hasuser"></Card>
  </div>
</template>
<script>
export default {
  data(){
    return {
      item:{},
      expanded:false
    }
  },
  props:{
    post:{
      type:Object,
      required:true
    },
    hasuser:{
      type:Boolean,
      required:false,
      default:true
    }
  }
}
</script>
<style lang="scss" scoped>

</style>