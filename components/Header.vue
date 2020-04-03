<template>
<div>
  <v-app-bar
    class="w-full"
    color="deep-purple accent-4"
    dense
    dark
    absolute
    fade-img-on-scroll
    src="https://picsum.photos/1920/1080?random">
    <v-app-bar-nav-icon @click.stop = "drawer = !drawer"></v-app-bar-nav-icon>
    <v-icon @click.stop="mini = !mini" class="app-icon">mdi-near-me</v-icon>
    <v-toolbar-title>کاربران</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="n in 5" :key="n" @click="() => { }">
          <v-list-item-title>منو {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      :mini-variant="mini"
      expand-on-hover
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ user.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.url"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</div>
</template>
<script>
// import axios from 'axios';
export default {
  data(){
    return {
      drawer:false,
      mini:false,
      items:this.$store.getters.getItems
      }
  },
  computed:{
    user:function(){
      return this.$store.getters.isLogged ? this.$store.getters.getUser : 'علی';
    }
  }
}
</script>
<style scoped>
.pages {
  display: flex;
  flex-direction: row;
  padding: 5px;
}
.pages div {
  padding: 5px;
}
.app-icon{
  height: 48px;
}
</style>
