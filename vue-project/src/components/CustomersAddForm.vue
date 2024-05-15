<script setup>
  import axios from "axios"
</script>

<template>
    <div class="form customer-add">
        <h2>Add new Customer</h2>
        <input type="text" v-model="customerName" placeholder="Customer Name"  />
        <input type="email" v-model="customerEmail" placeholder="Customer Email" />
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
            customerName: "",
            customerEmail: "",
            customersPOSTUrl: "http://localhost:8000/api/customers"
        }
    },
    methods: {
        replaceToMainCustomerPage() {
            window.location.href = ("/customers");
        },        
        async addCustomers() {
            try {
                this.customer.name = this.customerName;
                this.customer.email = this.customerEmail;

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
        cancel() {
            this.replaceToMainCustomerPage();
        }
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