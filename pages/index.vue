<template>
  <section class="container">
    <HomeMenu :items="items" @show="show()" />
  </section>
</template>

<script>
import HomeMenu from "~/components/HomeMenu";
export default {
  middleware:['auth'],
  created(){
  },
  components: {
    HomeMenu
  },
  data() {
    return {
      items:[]
    };
  },
  methods: {
    show: function() {
      console.log("Click Menu");
    }
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      return {
        items : store.state.items
      }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

