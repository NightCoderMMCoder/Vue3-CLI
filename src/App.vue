<template>
  <TheHeader></TheHeader>
  <div class="container">
    <CalculateTransaction></CalculateTransaction>
    <transactions-list></transactions-list>
    <add-transaction></add-transaction>
  </div>
</template>

<script>
import AddTransaction from "./components/AddTransaction.vue";
import CalculateTransaction from "./components/CalculateTransaction.vue";
import TheHeader from "./components/Layouts/TheHeader.vue";
import TransactionsList from "./components/TransactionsList.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    CalculateTransaction,
    TransactionsList,
    AddTransaction,
  },
};
</script>

<style></style>
