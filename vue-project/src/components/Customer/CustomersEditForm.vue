<script setup>
  import axios from "axios";
  import router from "@/router";
  import { useRoute } from 'vue-router';
  import ButtonCancel from "@/components/UI/Buttons/ButtonCancel.vue";
  import ButtonSuccess from "@/components/UI/Buttons/ButtonSuccess.vue";
  import Input from "@/components/UI/Input/Input.vue"
</script>

<template>
    <div class="form customer-add">
        <h2>Edit Customer</h2>
        <Input v-model="customer.name" placeholder="Customer Name"  />
        <Input v-model="customer.email" placeholder="Customer Email" />
        <div class="btn-lines">
            <ButtonSuccess @click="updateCustomers">Save</ButtonSuccess>
            <ButtonCancel @click="replaceToMainCustomerPage">Cancel</ButtonCancel>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            customer: {name: "", email: ""},
            url: "http://localhost:8000/api/customers/",
            customerId: useRoute().params.id
        }
    },
    mounted() {
        const route = useRoute();
        const customerId = route.params.id;
        this.getEditCustomer(customerId);
    },
    methods: {
        replaceToMainCustomerPage() {
            router.push("/customers");
        },
        async getEditCustomer(customerId) {
            try {
               let urlGetCustomerById = this.url + customerId + "/edit"; 
               let response = await axios.get(urlGetCustomerById);
               this.customer.name = response.data.name;
               this.customer.email = response.data.email;
            } 
            catch(e) 
            {
                console.log(e.message);
            } 
        },        
        async updateCustomers() {
            try {
                let urlUpdateCustomer = this.url + this.customerId;
                await axios.put(urlUpdateCustomer, this.customer);
            } 
            catch(e) 
            {
                console.log(e.message);
            } 
            finally {
                this.replaceToMainCustomerPage();
            }
        },
    }
}
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.btn-lines {
    display: flex;
    justify-content: space-between;
    width: 30%;
}
</style>