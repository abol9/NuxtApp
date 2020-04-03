export default function ({store,redirect}){
  if(!store.getters.isLogged){
    redirect('/auth/login');
  }
}