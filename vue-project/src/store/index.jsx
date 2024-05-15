import * as Vue from 'vue';
import Vuex from 'vuex';


 const store =  new Vuex.Store({
  state: {
    todos: [],
    customers: []
  },
  mutations: {
    SET_TODOS(state, todos) {
        state.todos = todos;
    },
    SET_CUSTOMERS(state, customers) {
        state.customers = customers;
    }
  },
  actions: {
   async fetchCustomers(context) {
        let response = await axios.get("http://localhost:8000/api/customers")
        this.$store.commit('SET_CUSTOMERS', response.data)
    }        
  },
  getters: {
    getCustomers(state) {
        return state.customers;
      }
  },
});

export default store;