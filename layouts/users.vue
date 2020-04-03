<template>
  <div>
    <Header />
    <nuxt class="blog" />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style scoped>
.blog {
  margin-top: 100px;
}
</style>