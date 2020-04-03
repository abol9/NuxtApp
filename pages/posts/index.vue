<template>
<div>
  <Posts :posts="posts" hasuser />
  <v-btn absolute bottom left color="primary" @click="show = true">ایجاد پست</v-btn>
  <v-dialog
      v-model="show"
      width="500"
    >

      <v-card>
        <v-card-title
          class="headline primary lighten-2"
          primary-title
        >
          ایجاد نوشته
        </v-card-title>

        <v-card-text>
          <v-text-field placeholder="عنوان" v-model="post.title"></v-text-field>
          <!-- <v-text-field placeholder="موضوع" v-model="post.subtitle"></v-text-field> -->
          <v-textarea placeholder="متن" v-model="post.body"></v-textarea>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="addPost()"
          >
            ایجاد
          </v-btn>
          <v-btn color="error" 
            @click="show = false">انصراف</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</div>
</template>
<script>
import axios from 'axios';
import Posts from '@/components/Posts';
export default {
  components:{
    Posts
  },
  created(){
    // axios.get('https://api.varzesh3.com/v2.0/leaguestat/widget/5/689').then(res=>{
    //   this.teams = res['data']['Table']; 
    //   console.log(this.teams);
    // })
  },
  fetch({store}){
  },
  data(){
    return {
      show:false,
      id:4,
      post:{
        // img:'https://cdn.mashreghnews.ir/d/2020/01/04/4/2683217.jpg',
        // user:{
        //   id:this.id++,
        //   img:'https://api.naqare.ir/media/cache_on_thumbnails/ec/f4/ecf4643058e2a9fbdeabf205ed5272bd.jpg',
        //   title:'مقالات علمی',
        //   subtitle:'نوشته شده توسط ابوالفضل صادقی'
        //   }
        }
    }
    // return{
    //   posts:[
    //     {id:1,title:'سلام',subtitle:'خسته نباشید.ادامه',text:'سلام . با عرض سلام و خسته نباشید خدمت استاد عزیز .',img:'https://cdn.mashreghnews.ir/d/2020/01/04/4/2683217.jpg',user:{
    //       img:'https://api.naqare.ir/media/cache_on_thumbnails/ec/f4/ecf4643058e2a9fbdeabf205ed5272bd.jpg',
    //       title:'مقالات علمی',
    //       subtitle:'نوشته شده توسط ابوالفضل صادقی'
    //     }},
    //     {id:2,title:'مقاله دوم',subtitle:'خسته نباشید.ادامه',text:'سلام . با عرض سلام و خسته نباشید خدمت استاد عزیز .',img:'https://cdn.mashreghnews.ir/d/2020/01/04/4/2683217.jpg',user:{
    //       img:'https://api.naqare.ir/media/cache_on_thumbnails/ec/f4/ecf4643058e2a9fbdeabf205ed5272bd.jpg',
    //       title:'مقالات علمی',
    //       subtitle:'نوشته شده توسط ابوالفضل صادقی'
    //     }},
    //     {id:3,title:'مقاله سوم',subtitle:'خسته نباشید.ادامه',text:'سلام . با عرض سلام و خسته نباشید خدمت استاد عزیز .',img:'https://cdn.mashreghnews.ir/d/2020/01/04/4/2683217.jpg',user:{
    //       img:'https://api.naqare.ir/media/cache_on_thumbnails/ec/f4/ecf4643058e2a9fbdeabf205ed5272bd.jpg',
    //       title:'مقالات علمی',
    //       subtitle:'نوشته شده توسط ابوالفضل صادقی'
    //     }}
    //   ]
    // }
  },
  methods:{
    addPost(){
      this.$store.dispatch('addPost',this.post);
      this.show = false;
    }
  },
  asyncData({store}) {
    store.dispatch('getPosts'); 
    return {
        posts:store.getters.posts 
    }
}
}
</script>
<style scoped>
.elevation-1 {
  margin-top: 50px;
}
</style>