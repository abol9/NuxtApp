<template>
<v-app>
  <div>
    <Header />
    <nuxt class="blog"/>
  </div>
</v-app>
</template>
<script>
import Header from '~/components/Header';
export default {
  components:{
    Header
  }
}
</script>

<style>
.blog {
  margin-top: 100px;
  padding: 0px 10px;
}
</style>

