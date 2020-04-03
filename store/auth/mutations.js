export default {
  register(state) {
    state.isLogged = true;
  },
  setToken(state, { token, expires_at }) {
    state.token = token;
    localStorage.setItem('Authorization', 'Bearer ' + token);
    this.$axios.defaults.headers.get['Authorization'] = 'Bearer ' + token;
  },
  setUser(state,user){
    state.user = user;
  }
}