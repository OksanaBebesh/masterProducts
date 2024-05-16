<script setup>
import DocumentationIcon from "@/components/icons/IconEcosystem.vue";
import DesciptionItem from "@/components/DesciptionItem.vue";
import axios from "axios";
</script>

<template>
  <DesciptionItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Products</template>
    <div class="btn-line">
      <button type="button" class="btn btn-info" @click="getProducts">Get Produtcs</button>
      <button type="button" class="btn btn-primary" @click="getMoreProducts" :disabled="disableButton">Get More Produtcs</button>
    </div>
    <div class="table-products">
      <div class="row-header table">
        <div class="id-column">#</div>
        <div>Product title</div>
        <div>Price</div>
        <div>Description</div>
        <div>Photo</div>
      </div>
      <div class="row-product" v-for="product in arrayProducts">
        <div class="id-column">{{ product.id }}</div>
        <div>{{ product.title }}</div>
        <div>{{ product.price }}</div>
        <div>{{ product.description.substring(0,50) }}</div>
        <div><img class="product-photo" :src="`${product.image}`" /></div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="getMoreProducts" :disabled="countProductsOnPage == 20">Get More Produtcs</button>
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
      maxCountProducts: 0,
    };
  },
  methods: {
    disableButton() {
      let isDisabled;
      return isDisabled;
    },
    
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

.row-product {
  padding: 15px;
  border: 1px solid rgb(174, 169, 169);
  border-radius: 5px;
  margin-bottom: 2px;
}

.row-product:hover {
  cursor: pointer;
  border: 2px solid rgb(61, 134, 75);
}

.row-product div {
  width: 8rem;
  padding: 10px;
}

.product-photo {
  width: 100px;
  box-shadow: 10px 5px 5px rgb(174, 169, 169);
  border-radius: 5px;
}

.btn-line {
  width: 50%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.row-header {
  border-bottom: 1px solid black;
}

.row-header div {
  font-weight: 500;
}

.id-column {
  width: 25px;
}
</style>
