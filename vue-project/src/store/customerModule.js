import Vuex from 'vuex';

import axios from "axios";
 export const customerModule = {
  state: () => ({
    test: 0,
    customers: [],
    isCustomersLoading: false,
    url: "http://localhost:8000/api/customers",
  }),
  mutations: {
    setCustomers(state, customers) {
        state.customers = customers;
    },
    setLoading(state, isCustomersLoading) {
        state.isCustomersLoading = isCustomersLoading;
    }
  },
  actions: {
   async fetchCustomers({state, commit}) {
        try {
            commit('setLoading', true)
            let response = await axios.get(state.url)
            commit('setCustomers', response.data)
        }
        catch(e) {
            console.log(e);
        }
        finally {
            commit('setLoading', false)
        }
    }        
  },
  getters: {
    getCustomers(state) {
        return [...state.customers];
      }
  },
  namespaced: true
};

export default customerModule;