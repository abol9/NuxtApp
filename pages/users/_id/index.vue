<template>
  <div>{{ $route.params.id }}</div>
</template>
<style>
</style>
<script>
export default {
  validate(data) {
    return /^\d+$/.test(data.params.id);
  }
};
</script>
