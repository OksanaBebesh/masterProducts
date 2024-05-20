<script setup>
  import DocumentationIcon from "@/components/icons/IconEcosystem.vue";
  import DesciptionItem from "@/components/DesciptionItem.vue";
  import ButtonInfo from "@/components/UI/Buttons/ButtonInfo.vue";
  import ButtonSuccess from "@/components/UI/Buttons/ButtonSuccess.vue";
  import ButtonCancel from "@/components/UI/Buttons/ButtonCancel.vue";
  import router from "@/router";
  import axios from "axios";
  import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
  
</script>

<template>
    <DesciptionItem>
    <template #icon>
      <DocumentationIcon />
    </template>
       
    <template #heading>Customers</template>
    <ButtonInfo @click="addCustomerFormShow">Add Customer</ButtonInfo>
        <div class="table-customers" >      
          <div class="row-header table">
            <div class="id-column">#</div>       
            <div>name</div>
            <div>email</div>
            <div>actions</div>
          </div>
          <div class="row-customer" v-for="customer in arrayCustomers">
            <div class="id-column">{{ customer.id }}</div>
            <div>{{ customer.name }}</div>
            <div>{{ customer.email }}</div>
            <div>
                  <ButtonSuccess  
                    @click="editCustomerFormShow(customer.id)">
                    Edit Customer
                  </ButtonSuccess>
                  <ButtonCancel
                    @click="removeCustomer(customer.id)"
                  >X</ButtonCancel>
            </div>
          </div>
        </div>
  </DesciptionItem>

</template>

<script>

export default {
  mounted() {
    this.fetchCustomers();
  },
  computed: {
    ...mapState({
      arrayCustomers: state => state.customer.customers,
      isCustomersLoading: state => state.customer.isCustomersLoading,
      url: state => state.customer.url,
      test: state => state.customer.test
    }),
    ...mapGetters({
      getCustomers: 'customer/getCustomers'
    }),
  },
  methods: {
    ...mapMutations({
      setCustomers: 'customer/setCustomers',
      setLoading: 'customer/setLoading'
    }),
    ...mapActions({
      fetchCustomers: 'customer/fetchCustomers'
    }),
    // async fetchCustomers() {
    //   try {
    //     this.isCustomersLoading = true;
    //     const response = await axios.get(this.url);
    //     this.arrayCustomers = response.data;
    //   } catch (e) {
    //     console.error(e);
    //   } finally {
    //     this.isCustomersLoading = false;
    //   }
    // },
    addCustomerFormShow() {
      router.push("customers/add")
    },
    editCustomerFormShow(customerId) {
      router.push({ path: `customers/edit/${customerId}` });
    },
    async removeCustomer(customerId) {
      try {
        await axios.delete(this.url + "/" + customerId);
      }
      catch (e) {
        console.error(e.message)
      }
      finally {
        this.fetchCustomers();
      }
    }
  },
};
</script>

<style scoped>
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
