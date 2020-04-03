<template>
  <v-data-table
    :headers="header"
    :items="teams"
    :items-per-page="10"
    class="elevation-1"
    :footer-props="{itemsPerPageText:'تعداد ردیف در هر صفحه'}"
  ></v-data-table>
</template>
<script>
import axios from 'axios';
export default {
  created(){
    axios.get('https://api.varzesh3.com/v2.0/leaguestat/widget/5/'+this.id).then(res=>{
      this.teams = res['data']['Table']; 
    })
  },
    props:{
      id:{
        type:String,
        required:true
      }
    },
  data(){
    return{
    header:[{
      text:'تیم',value:'Team',align: 'start'
    },{
      text:'بازی',value:'Played',align: 'start',
    },{
      text:'برد',value:'Victories',align: 'start',
    },{
      text:'باخت',value:'Defeats',align: 'start',
    },{
      text:'مساوی',value:'Draws',align: 'start',
    },{
      text:'تفاضل',value:'Diff',align: 'start',
    },{
      text:'امتیاز',value:'Points',align: 'start',
    }],
    teams:[]
  }
  }
}
</script>
<style scoped>
.elevation-1 {
  margin-top: 50px;
}
</style>