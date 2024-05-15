<script setup>
  import DocumentationIcon from "../components/icons/IconEcosystem.vue"
  import DesciptionItem from "@/components/DesciptionItem.vue"
  import axios from "axios"

</script>

<template>
  <DesciptionItem>
    <template #icon>
      <DocumentationIcon />
    </template>
       
    <template #heading>Customers</template>
    <button type="button" class="btn btn-info" @click="addCustomerFormShow">Add Customer</button>
    <div class="table-customers" >      
      <div class="row-header table">
        <div class="id-column">#</div>       
        <div>name</div>
        <div>email</div>
      </div>
      <div class="row-customer" v-for="customer in arrayCustomers">
        <div class="id-column">{{ customer.id }}</div>
        <div>{{ customer.name }}</div>
        <div>{{ customer.email }}</div>
      </div>
    </div>
  </DesciptionItem>
</template>

<script>

export default {
  data() {
    return {
      arrayCustomers: [],
      isCustomersLoading: false,
      customersGetUrl: "http://localhost:8000/api/customers",
      customersPOSTUrl: "http://localhost:8000/api/customers",
    };
  },
  mounted() {
    this.fetchCustomers();
  },
  computed: {
    customersFromStore() {
      return this.$store.state.customers;
    },
  },
  methods: {
    async fetchCustomers() {
      try {
        this.isCustomersLoading = true;
        const response = await axios.get("http://localhost:8000/api/customers");
        this.arrayCustomers = response.data;
      } catch (e) {
        console.error(e);
      } finally {
        this.isCustomersLoading = false;
      }
    },
    addCustomerFormShow() {
      window.location.replace("customers/add");
    }

  },
};
</script>

<style>
.table-customers {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 43rem;
}

.row-header,
.row-customer {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.row-customer {
  padding: 15px;
  border: 1px solid rgb(174, 169, 169);
  border-radius: 5px;
  margin-bottom: 2px;
}

.row-customer:hover {
  cursor: pointer;
  border: 2px solid rgb(61, 134, 75);
}

.row-customer div {
  width: fit-content;
  padding: 10px;
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
  width: fit-content;
}
</style>
