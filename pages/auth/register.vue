<template>
<div>
  <nuxt-link to="/posts">پست ها</nuxt-link>
  <v-card class="col-lg-6 col-md-8 col-sm-9 col-10 shadow mx-auto pa-0">
    <v-card-title
          class="headline secondary lighten-2 text-white card-title"
        >
          ورود
        </v-card-title>
        <v-card-text>
          <v-text-field
      filled
      label="نام"
      v-model="user.name"
      :rules="[required]"
      required
      class="ma-2"
    ></v-text-field>
    <v-text-field
      filled
      label="ایمیل"
      v-model="user.email"
      :rules="[required ,email]"
      required
      class="ma-2"
    ></v-text-field>
    <v-text-field
      filled
      label="رمزعبور"
      v-model="user.password"
      :rules="[required ,equal(user)]"
      required
      class="ma-2"
    ></v-text-field>
    <v-text-field
      filled
      :disabled="!user.password"
      label="تکرار رمزعبور"
      v-model="user.c_password"
      :rules="[required,equal(user)]"
      required
      class="ma-2"
    ></v-text-field>
    
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="register()">
            ورود
          </v-btn>
        </v-card-actions>
  </v-card>
</div>
</template>
<script>
export default {
  data(){
    return {
      user:{
        name:'',
        password:'',
        c_password:'',
        email:''
      }
    }
  },
  methods:{
    email: (value) => {
      const pattern = /^(([^<>()[\]\.,;:\s@"]+(\.[^<>()[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return pattern.test(value) || 'ایمیل را وارد کنید';
    },
    required:(value) => {
      return value.length > 0 || 'این فیلد اجباری است.';
    },
    equal: (user) => {
      if(user.c_password){
      return user.c_password === user.password || 'تکرار و رمزعبور مطابقت ندارد.';
      } else {
        return false;
      }
    },
    register(){
      this.$store.dispatch('auth/setregister',this.user);
    }
  }  
}
</script>
<style lang="scss" scoped>
.card-title {
  font-family: Iry !important;
  font-size: 26px !important;
  font-weight: bold;
  text-align: center;
  line-height:1.5rem;

}
</style>