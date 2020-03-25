<template>
  <div>
    <input type="text" v-model="userID" />
    <button @click="ShowUser">Show</button>
    <nuxt-child />
  </div>
</template>
<style>
h1 {
  text-align: center;
  margin: auto;
}
</style>
<script>
export default {
  data() {
    return {
      userID: ""
    };
  },
  methods: {
    ShowUser() {
      this.$router.push("/users/" + this.userID);
    }
  },
  layout: "users"
};
</script>
