<template>
<TeamTable :id="this.$route.params.id" />
</template>
<script>
import TeamTable from '~/components/TeamTable';
export default {
  components:{
    TeamTable
  },
}
</script>
<style scoped>

</style>