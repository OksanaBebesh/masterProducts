<script setup>
  import axios from "axios";
  import router from "@/router";
  import { useRoute } from 'vue-router';
  import ButtonSuccess from "@/components/UI/Buttons/ButtonSuccess.vue";
  import ButtonCancel from "@/components/UI/Buttons/ButtonCancel.vue";
  import InputText from "@/components/UI/Input/InputText.vue";
</script>
<template>
    <div>
        <form class="form customer-add">
            <h2 v-if="edit">Update Customer</h2>
            <h2  v-else>Add new Customer</h2>
            <input v-model="customer.name" placeholder="Customer Name"  />
            <input v-model="customer.email" placeholder="Customer Email" />
            <div class="btn-lines">
                <ButtonSuccess v-if="edit" @click="updateCustomers">Update</ButtonSuccess>
                <ButtonSuccess v-else @click="addCustomers">Save</ButtonSuccess>
                <ButtonCancel @click="replaceToMainCustomerPage">Cancel</ButtonCancel>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            modal: "",
            customer: {name: "", email: ""},
            url: "http://localhost:8000/api/customers/",
            customerId: useRoute().params.id,
            edit: false
        }
    },
    mounted() {
        const route = useRoute();
        const customerId = route.params.id;
        this.modal = (route.params.id)? "edit" : "add";

        if (this.modal === "edit") {
           this.edit = true;
           this.getEditCustomer(customerId);
        }
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
        async addCustomers() {
            try {
                await axios.post(this.url, this.customer);
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
    
</style>