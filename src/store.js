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
    setError(state, error){
      state.error = error;
    }

  },
  actions: {
    async register(context, data){
      this.error = "";
      try {
        let response = await axios.post("/api/users/register", data);
        context.commit('setUser', response.data);
        console.log(this.user);
        return "";
      } catch (error) {
        context.commit('setError', error.response.data.message);
        this.error = error.response.data.message;
        return this.error;
      }
    },
    async login(context, data){
      this.error = "";
      try {
        let response = await axios.post("/api/users/login", data);
        context.commit('setUser', response.data);
        console.log(this.user);
        return "";
      } catch (error) {
        context.commit('setError', error.response.data.error);
        this.error = error.response.data.error;
        return this.error;
      }
    },
    async logout(context){
      console.log('in logout');
      try {
        let response = await axios.delete("/api/users/");
        context.commit('setUser', null);
        console.log(response);
        return null;
      } catch (error) {
        console.log(error)
      }
    },
    async getUser(context) {

    },
    async getLists(context){
      try {
        let response = await axios.get("/api/items");
        console.log(response);
        let todos = response.data.filter(function(d){
          if(d.type === "Todo"){
            return d.text;
          }
        });
        context.commit('setTodos', todos);
        this.Notes = response.data.filter(function(d){
          if(d.type === "Note"){
            return d.text;
          }
        });
        this.Goals = response.data.filter(function(d){
          if(d.type === "Goal"){
            return d.text;
          }
        });
        this.Gratitudes = response.data.filter(function(d){
          if(d.type === "Gratitude"){
            return d.text;
          }
        });
      } catch(error){
        console.log(error);
      }
    },
    async addItem(context, data){
      try {
        let response = await axios.post("/api/items", data);
        console.log(response);
        this.getLists();
      } catch (error) {
        console.log(error);
      }
    }
  }
})
