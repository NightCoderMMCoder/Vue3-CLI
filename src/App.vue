<template>
  <h1>App</h1>
  <TheHeader></TheHeader>
  <div class="container">
    <CalculateTransaction :transactions="transactions"></CalculateTransaction>
    <transactions-list
      :transactions="transactions"
      @delete-transaction="removeTransaction"
    ></transactions-list>
    <add-transaction v-on:add-transaction="addTransaction"></add-transaction>
  </div>
</template>

<script>
import AddTransaction from "./components/AddTransaction.vue";
import CalculateTransaction from "./components/CalculateTransaction.vue";
import TheHeader from "./components/Layouts/TheHeader.vue";
import TransactionsList from "./components/TransactionsList.vue";
import { v4 as uuidv4 } from "uuid";
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
          amount: -400,
        },
        {
          id: 2,
          name: "Salary",
          amount: 600000,
        },
        {
          id: 3,
          name: "Computer",
          amount: -10000,
        },
      ],
    };
  },
  methods: {
    removeTransaction(id) {
      const idx = this.transactions.findIndex(
        (transaction) => transaction.id === id
      );
      this.transactions.splice(idx, 1);
    },
    addTransaction(transaction) {
      this.transactions.unshift({
        id: uuidv4(),
        ...transaction,
      });
    },
  },
};
</script>
