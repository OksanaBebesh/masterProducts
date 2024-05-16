<script setup>
  import axios from "axios";
  import router from "@/router";
</script>

<template>
    <div class="form customer-add">
        <h2>Add new Customer</h2>
        <input type="text" v-model="customer.name" placeholder="Customer Name"  />
        <input type="email" v-model="customer.email" placeholder="Customer Email" />
        <div class="btn-lines">
            <button class="btn btn-success" @click="addCustomers">Save</button>
            <button class="btn btn-danger" @click="replaceToMainCustomerPage">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            customer: {name: "", email: ""},
            customersPOSTUrl: "http://localhost:8000/api/customers"
        }
    },
    methods: {
        replaceToMainCustomerPage() {
            router.push("/customers");
        },
        
        async addCustomers() {
            try {
                await axios.post(this.customersPOSTUrl, this.customer);
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

.form input {
    padding: 10px;
    margin: 10px;
}

.btn-lines {
    display: flex;
    justify-content: space-between;
    width: 30%;
}
</style>