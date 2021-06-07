<template>
  <h3>History</h3>
  <transition-group name="slide" tag="ul">
    <transaction-item
      v-for="transaction in transactions"
      :key="transaction.id"
      :transaction="transaction"
      @delete-transaction="$emit('deleteTransaction', $event)"
    ></transaction-item>
  </transition-group>
</template>

<script>
import TransactionItem from "./TransactionItem.vue";
export default {
  components: { TransactionItem },
  props: {
    transactions: {
      type: Array,
      required: true,
    },
  },
  emits: ["deleteTransaction"],
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;
  position: relative;
}
.slide-enter-from {
  transform: translateX(-100px);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(100px);
  opacity: 0;
}
.slide-leave-active {
  position: absolute;
}
</style>
