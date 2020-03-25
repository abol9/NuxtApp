<template>
  <div class="menu" @click="$emit('show')">
    <nuxt-link v-for="item of items" :key="item.id" class="menu-item" :to="item.url">{{item.title}}</nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    items: {
      required: true,
      type: Array
    }
  }
};
</script>
<style lang="scss" scoped>
.menu {
  width: 100%;
  padding: 10px;
}
.menu-item {
  padding: 10px;
  margin: 5px;
  background-color: #eee;
  display: block;
  box-shadow: 0px 0px 7px 0px #eee;
  &:hover {
    background-color: #777;
    color: white;
    box-shadow: 2px 5px 10px 5px #eee;
    transform: translate(0, -5px);
    transition: transform 2s;
  }
}
</style>
