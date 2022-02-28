import instance from '../../api/api';

const store = {
  namespaced: true,
  state: {
    list: [], // 產品列表
    item: [], // 產品
    showModal: false,
  },
  actions: {
    // 取得產品列表
    async getAllProducts({ commit }) {
      await instance
        .getEvent('/products/all')
        .then((res) => {
          commit('setProducts', res.data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取得指定產品
    async getProduct({ commit }, id) {
      await instance
        .getEvent(`/product/${id}`)
        .then((res) => {
          commit('setProduct', res.data.product);
          commit('setShowModal', true);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    setProducts(state, products) {
      state.list = products;
    },
    setProduct(state, product) {
      state.item = product;
    },
    setShowModal(state, isShow) {
      state.showModal = isShow;
    },
  },
};

export default store;
