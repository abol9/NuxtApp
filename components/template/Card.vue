<template>
  <v-card class="pa-1" hover :to="path+'/'+item.id" raised >
    <v-list-item v-if="hasuser && item.user">
      <v-list-item-avatar color="grey">
        <v-img :src="item.user.img"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ item.user.name }}</v-list-item-title>
        <v-list-item-subtitle>نوشته شده توسط {{ item.user.name }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-img class="white--text align-end" :src="item.img" v-if="item.img">
      <v-card-title>
        {{ item.title }}
      </v-card-title>
    </v-img>

    <v-card-title v-if="!item.img">{{ item.title }}</v-card-title>
    <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
    <v-card-text v-if="expanded">{{ item.text }}</v-card-text>
    <v-card-actions v-if="action">
      <v-btn 
      color="success">{{ item.btnSuccessTitle }}</v-btn>

      <v-btn
        color="error"
      >
        {{ item.btnErrorTitle }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
        v-if="expanded"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{ item.text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  props:{
    item:{
      type:Object,
      required:true
    },
    path:{
      type:String,
      required:true
    },
    expanded:{
      type:Boolean,
      required:false,
      default:false
    },
    action:{
      type:Boolean,
      required:false,
      default:false
    },
    hasuser:{
      type:Boolean,
      required:false,
      default:false
    }
  },
  data(){
    return {
      show:false
    }
  }
}
</script>
<style scoped>

</style>