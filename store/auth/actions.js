export default {
  async setregister(vuexContext, user) {
    await this.$axios.post('/register', user).then(res => {
      console.log(res);
      if (res['data']['state']) {
        vuexContext.commit('register');
        vuexContext.commit('setUser',user);
        vuexContext.commit('setToken', res['data']['meta']);
      }
    });
  },
  async login(vuexContext, user) {
    await this.$axios.post('/login', user).then(res => {
      if (res['data']['state']) {
        vuexContext.commit('setToken',res['data']['meta']);
        vuexContext.commit('setUser', user);
        vuexContext.commit('register');
      }
    })

  }
} 
