<template>
  <h1>App</h1>
  <TheHeader></TheHeader>
  <div class="container">
    <CalculateTransaction></CalculateTransaction>
    <transactions-list :transactions="transactions"></transactions-list>
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
  data() {
    return {
      transactions: [
        {
          id: 1,
          name: "Cash",
          amount: -4000,
        },
        {
          id: 2,
          name: "Salary",
          amount: 60000000,
        },
        {
          id: 3,
          name: "Computer",
          amount: -1000000,
        },
      ],
    };
  },
};
</script>
