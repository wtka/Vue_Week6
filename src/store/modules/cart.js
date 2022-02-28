import instance from '../../api/api';

const store = {
  namespaced: true,
  state: {
    cartItems: {
      carts: [],
    },
    cartNumber: 0,
    isBlockItem: false,
  },
  actions: {
    async getCart({ commit }) {
      await instance
        .getEvent('/cart')
        .then((res) => {
          commit('setCartItems', res.data.data);
          commit('setCartNum', res.data.data.carts.length);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async clearCart({ commit }) {
      await instance
        .deleteEvent('carts')
        .then(() => {
          commit('clearCartItems');
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async addProductToCart({ commit, dispatch }, { id, qty }) {
      commit('setBlockItem', true);
      const data = {
        product_id: id,
        qty,
      };
      await instance
        .postEvent('/cart', { data })
        .then((res) => {
          commit('setCartItems', res.data.data);
          dispatch('getCart');
          commit('setBlockItem', false);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    setCartItems(state, items) {
      state.cartItems = items;
    },
    setCartNum(state, num) {
      state.cartNumber = num;
    },
    clearCartItems(state) {
      state.cartItems = {};
      state.cartNumber = 0;
    },
    setBlockItem(state, status) {
      state.isBlockItem = status;
    },
  },
};

export default store;
