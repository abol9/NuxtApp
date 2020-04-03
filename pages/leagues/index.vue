<template>
<v-card class="list">
  <nuxt-link v-for="item in countries"
            :key="item.title" :to="'leagues/'+item.id">
          <v-list-item
            avatar
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
    </nuxt-link>
      </v-card>
</template>
<script>
export default {
  data(){
    return {
      countries:[
        {id:689,title:'لالیگا اسپانیا'},
        {id:691,title:'لوشامپبونه فرانسه'},
        {id:687,title:'لیگ برتر انگلیس'},
        {id:690,title:'سری آ ایتالیا'},
        {id:688,title:'بوندسلیگا آلمان'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  .list{
    margin-top:50px
  }
</style>