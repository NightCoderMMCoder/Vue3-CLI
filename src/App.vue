<template>
  <base-dialog
    :show-dialog="showDialog"
    @cancel="toggleDialog"
    @delete-transaction="removeTransaction"
  ></base-dialog>
  <TheHeader></TheHeader>
  <div class="container">
    <CalculateTransaction :transactions="transactions"></CalculateTransaction>
    <transactions-list
      :transactions="transactions"
      @delete-transaction="toggleDialog"
    ></transactions-list>
    <add-transaction v-on:add-transaction="addTransaction"></add-transaction>
  </div>
</template>

<script>
import AddTransaction from "./components/AddTransaction.vue";
import CalculateTransaction from "./components/CalculateTransaction.vue";
import TheHeader from "./components/Layouts/TheHeader.vue";
import TransactionsList from "./components/TransactionsList.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "App",
  components: {
    TheHeader,
    CalculateTransaction,
    TransactionsList,
    AddTransaction,
    BaseDialog,
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
      showDialog: false,
      id: null,
    };
  },
  methods: {
    removeTransaction() {
      const idx = this.transactions.findIndex(
        (transaction) => transaction.id === this.id
      );
      this.transactions.splice(idx, 1);
      this.toggleDialog();
    },
    addTransaction(transaction) {
      this.transactions.unshift({
        id: uuidv4(),
        ...transaction,
      });
    },
    toggleDialog(id) {
      this.id = id;
      this.showDialog = !this.showDialog;
    },
  },
};
</script>
