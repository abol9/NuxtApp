
export const state = ()=>({
  posts:[],
  items: [
    { id: 1,icon:'mdi-home', title: "خانه", url: "/" },
    { id: 5, icon: 'mdi-football', title: 'جدول باشگاه های اروپا', url: '/leagues' },
    { id: 2, icon: 'mdi-post', title: "نوشته ها", url: "/posts" },
    { id: 3, icon: 'mdi-information', title: "درباره ما", url: "/about" }, { id: 4, icon: 'mdi-account', title: "کاربران", url: "/users" },
    { id: 7, icon: 'mdi-login', title: "ورود", url: "/auth/login" }, { id: 6, icon: 'mdi-account-plus', title: "ثبت نام", url: "/auth/register"},
  ]
    })

 export const mutations = {
      setPosts(state,posts){
        state.posts = posts;
      },
      addPost(state,post){
        state.posts.push(post)
      }
    }
 export const actions = {
      getPosts(vuexContext){
     if (vuexContext.rootState.auth.token){
       this.$axios.get('/allposts',{
          'Authorization': 'Bearer '+vuexContext.rootState.auth.token
        }).then(res=>{
          const posts = res['data']['data']
          vuexContext.commit('setPosts',posts);
        })
        // return new Promise((resolve,reject)=>{
        // setTimeout(()=>{
        //   vuexContext.commit('setPosts', [
        //     {
        //       id: 1, title: 'سلام', subtitle: 'خسته نباشید.ادامه', text: 'سلام . با عرض سلام و خسته نباشید خدمت استاد عزیز .', img: 'https://cdn.mashreghnews.ir/d/2020/01/04/4/2683217.jpg', user: {
        //         img: 'https://api.naqare.ir/media/cache_on_thumbnails/ec/f4/ecf4643058e2a9fbdeabf205ed5272bd.jpg',
        //         title: 'مقالات علمی',
        //         subtitle: 'نوشته شده توسط ابوالفضل صادقی'
        //       }
        //     },
        //     {
        //       id: 2, title: 'مقاله دوم', subtitle: 'خسته نباشید.ادامه', text: 'سلام . با عرض سلام و خسته نباشید خدمت استاد عزیز .', img: 'https://cdn.mashreghnews.ir/d/2020/01/04/4/2683217.jpg', user: {
        //         img: 'https://api.naqare.ir/media/cache_on_thumbnails/ec/f4/ecf4643058e2a9fbdeabf205ed5272bd.jpg',
        //         title: 'مقالات علمی',
        //         subtitle: 'نوشته شده توسط ابوالفضل صادقی'
        //       }
        //     },
        //     {
        //       id: 3, title: 'مقاله سوم', subtitle: 'خسته نباشید.ادامه', text: 'سلام . با عرض سلام و خسته نباشید خدمت استاد عزیز .', img: 'https://cdn.mashreghnews.ir/d/2020/01/04/4/2683217.jpg', user: {
        //         img: 'https://api.naqare.ir/media/cache_on_thumbnails/ec/f4/ecf4643058e2a9fbdeabf205ed5272bd.jpg',
        //         title: 'مقالات علمی',
        //         subtitle: 'نوشته شده توسط ابوالفضل صادقی'
        //       }
        //     }
        //   ]);
        //   console.log('Okey!!',process.env.title)
        //   resolve();
        //   },1500)
        // })
      }
      else {
        this.$router.push('/auth/register');
      }
      },
      setPosts(vuexContext,posts){
        vuexContext.commit('setPosts',posts)
      },
      addPost(vuexContext,post){
        this.$axios.post('/post/create',post,{
          headers:{
            'Authorization': localStorage.getItem('Authorization')
          }
        });
      }
    }

export const getters = {
      posts(state){
        return state.posts;
      },
      getItems(state){
        return state.items;
      }
    }