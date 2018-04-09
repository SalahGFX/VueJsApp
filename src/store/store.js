import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    funds: 10000,
    stocks: [
      {product: "BMW", price: 110, quantity: ''},
      {product: "Google", price: 200, quantity: ''},
      {product: "Apple", price: 250, quantity: ''},
      {product: "Twitter", price: 8, quantity: ''}
    ],
    portfolio: [],
    show: true
  },
  getters: {
    funds: state => state.funds.toLocaleString("US")
  }
});
