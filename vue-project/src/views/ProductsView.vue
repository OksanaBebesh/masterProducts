<script setup>
import DocumentationIcon from "../components/icons/IconEcosystem.vue";
import DesciptionItem from "@/components/DesciptionItem.vue";
</script>

<template>
  <DesciptionItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Products</template>
    <button @click="fetchData">Get Produtcs</button>
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
  </DesciptionItem>
</template>

<script>
export default {
  data() {
    return {
      arrayProducts: [],
    };
  },
  methods: {
    getProducts() {},
    fetchData() {
      fetch("https://fakestoreapi.com/products?limit=10")
        .then((response) => response.json())
        .then((json) => (this.arrayProducts = json));
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
