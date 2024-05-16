<script setup>
  import axios from "axios";
  import router from "@/router";
  import ButtonSuccess from "@/components/UI/Buttons/ButtonSuccess.vue";
  import ButtonCancel from "@/components/UI/Buttons/ButtonCancel.vue";
  import Input from "@/components/UI/Input/Input.vue";
</script>

<template>
    <div class="form customer-add">
        <h2>Add new Customer</h2>
        <Input v-model="customer.name" placeholder="Customer Name"  />
        <Input v-model="customer.email" placeholder="Customer Email" />
        <div class="btn-lines">
            <ButtonSuccess @click="addCustomers">Save</ButtonSuccess>
            <ButtonCancel @click="replaceToMainCustomerPage">Cancel</ButtonCancel>
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

.btn-lines {
    display: flex;
    justify-content: space-between;
    width: 30%;
}
</style>