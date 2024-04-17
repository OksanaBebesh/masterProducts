<script setup>
import DocumentationIcon from "../components/icons/IconEcosystem.vue";
import DesciptionItem from "@/components/DesciptionItem.vue";
import axios from "axios";
</script>

<template>
  <DesciptionItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Products</template>
    <button @click="getProducts">Get Produtcs</button>
    <button @click="getMoreProducts" :disabled="countProductsOnPage == 20">Get More Produtcs</button>
    <div class="table-products">
      <div class="row-header">
        <div>N</div>
        <div>Product title</div>
        <div>Price</div>
        <div>Description</div>
        <div>Photo</div>
      </div>
      <div class="row-product" v-for="product in arrayProducts">
        <div>{{ product.id }}</div>
        <div>{{ product.title }}</div>
        <div>{{ product.price }}</div>
        <div>{{ product.description }}</div>
        <div><img class="product-photo" :src="`${product.image}`" /></div>
      </div>
    </div>
    <button @click="getMoreProducts" :disabled="countProductsOnPage == 20">Get More Produtcs</button>
  </DesciptionItem>
</template>

<script>
export default {
  mounted() {
    this.fetchProductsData();
  },
  data() {
    return {
      arrayProducts: [],
      countProductsOnPage: 10,
      allPtoducts: [],
      arrayAllProducts: [],
      isProductsLoading: false,
    };
  },
  methods: {
    getProducts() {
      this.fetchProductsData();
    },
    getMoreProducts() {
      this.countProductsOnPage += 5;
      this.fetchProductsData();
    },
    

    async fetchProductsData() {
      try {
        this.isProductsLoading = true;
        const response = await axios.get("https://fakestoreapi.com/products?limit=" + this.countProductsOnPage)
        this.arrayProducts = response.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.isProductsLoading = false;
      }

    },

    fetchAllProductsData() {
      fetch(
        "https://fakestoreapi.com/products"
      )
        .then((response) => response.json())
        .then((json) => (this.arrayAllProducts = json));
    },

  },
};
</script>

<style>
.table-products {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 43rem;
}
.row-header,
.row-product {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.row-product div {
  width: 8rem;
  padding: 10px;
}

.product-photo {
  width: 150px;
}
</style>
