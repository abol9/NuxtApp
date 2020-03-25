<template>
  <section class="container">
    <HomeMenu :items="items" @show="show()" />
  </section>
</template>

<script>
import HomeMenu from "~/components/HomeMenu";
export default {
  components: {
    HomeMenu
  },
  data() {
    return {
      items: [
        { id: 1, title: "خانه", url: "/" },
        { id: 2, title: "نوشته ها", url: "/posts" },
        { id: 3, title: "درباره ما", url: "/about" },
        { id: 4, title: "کاربران", url: "/users" }
      ]
    };
  },
  methods: {
    show: function() {
      console.log("Click Menu");
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

