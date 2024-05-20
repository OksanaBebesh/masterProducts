import Vuex from 'vuex';
import {customerModule} from "../store/customerModule.js"


 const store =  new Vuex.Store({
 modules: {
  customer: customerModule
 }
});

export default store;