import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    Todos: [],
    Notes: [],
    Goals: [],
    Gratitudes: [],
    error: null,
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    },
    setTodos(state, todos){
      state.Todos = todos;
    },
    setNotes(state, notes){
      state.Notes = notes;
    },
    setGoals(state, goals){
      state.Goals = goals;
    },
    setGratitudes(state, gratitudes){
      state.Gratitudes = gratitudes;
    },


  },
  actions: {
    async login(context, data){
      this.error = "";
      try {
        let response = await axios.post("/api/users/register", data);
        context.commit('setUser', response.data);
        console.log(this.user);
        return "";
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async register(context, data){

    },
    async logout(context){

    },
    async getUser(context) {

    },
    async getLists(){
      //fetch list of all items, pass to todos, notes, etc.
    },
  }
})
