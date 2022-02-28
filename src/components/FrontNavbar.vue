<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand nav-link" to="/">洋食館</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/products">前台產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/cart">前台購物車</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin">後台購物車列表</router-link>
          </li>
        </ul>
      </div>
      <button class="btn btn-outline-danger" type="button" @click="clearCart()" :disabled="isBlock">
        清空購物車
      </button>
      <button class="btn btn-primary" type="button">
        結帳
        <span class="badge rounded-pill bg-danger">{{ cartNum }}</span>
      </button>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const clearCart = () => store.dispatch('cart/clearCart');
    const cartNum = computed(() => store.state.cart.cartNumber);
    const isBlock = computed(() => store.state.cart.isBlockItem);

    onMounted(() => {
      store.dispatch('cart/getCart');
    });

    return {
      store,
      cartNum,
      isBlock,
      clearCart,
    };
  },
};
</script>
