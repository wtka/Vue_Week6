<template>
  <h2 class="m-2">前台產品列表</h2>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td style="width: 200px">
          <div
            :style="{ backgroundImage: `url(${item.imageUrl}` }"
            style="height: 100px; background-size: cover; background-position: center"
          ></div>
        </td>
        <td>
          {{ item.title }}
        </td>
        <td>
          <div class="h5" v-if="item.price === item.origin_price">{{ item.price }} 元</div>
          <div v-else>
            <del class="h6">原價 {{ item.origin_price }} 元</del>
            <div class="h5">現在只要 {{ item.price }} 元</div>
          </div>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="getCurrentProduct(item.id)"
            >
              查看更多
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="addProductToCart(item.id, 1)"
              :disabled="isBlock"
            >
              <span class="spinner-grow spinner-grow-sm" v-show="isBlock"></span>
              加到購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <productModal></productModal>
</template>

<script>
import {
  ref, onMounted, computed, watch,
} from 'vue';
import { useStore } from 'vuex';
import Modal from 'bootstrap/js/dist/modal';
import productModal from '@/components/ProductModal.vue';

export default {
  components: {
    productModal,
  },
  setup() {
    const store = useStore();
    const modalObj = ref({});
    const isBlock = computed(() => store.state.cart.isBlockItem);
    const products = computed(() => store.state.products.list);
    const addProductToCart = (id, qty = 1) => store.dispatch('cart/addProductToCart', { id, qty });
    const getCurrentProduct = (id) => store.dispatch('products/getProduct', id);

    // 監聽 Modal 狀態
    const isShowModal = computed(() => store.state.products.showModal);
    watch(isShowModal, (val) => {
      if (val) {
        modalObj.value.show();
        store.commit('products/setShowModal', false);
      }
    });

    onMounted(() => {
      // 取得產品列表
      store.dispatch('products/getAllProducts');

      // 初始化產品 Modal
      modalObj.value = new Modal(document.getElementById('productModal'));
    });

    return {
      products,
      isBlock,
      modalObj,
      addProductToCart,
      getCurrentProduct,
      isShowModal,
    };
  },
};
</script>
