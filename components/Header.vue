<template>
  <div class="pages">
    <div>
      <nuxt-link to="/users">Users</nuxt-link>
    </div>
    <div>
      <nuxt-link to="/">Home</nuxt-link>
    </div>
  </div>
</template>
<style scoped>
.pages {
  display: flex;
  flex-direction: row;
  padding: 5px;
}
.pages div {
  padding: 5px;
}
</style>
