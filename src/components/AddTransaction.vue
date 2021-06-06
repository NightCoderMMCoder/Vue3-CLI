<template>
  <h3>Add new transaction</h3>
  <form @submit.prevent="addTransaction">
    <div class="form-control">
      <label for="text">Text</label>
      <input
        type="text"
        v-model.trim="transaction.name"
        placeholder="Enter text..."
      />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input
        type="number"
        v-model.number="transaction.amount"
        placeholder="Enter amount..."
      />
    </div>
    <button class="btn" type="submit">Add transaction</button>
  </form>
</template>

<script>
export default {
  name: "AddTransaction",
  emits: ["addTransaction"],
  data() {
    return {
      transaction: {
        name: "",
        amount: "",
      },
    };
  },
  methods: {
    addTransaction() {
      this.$emit("addTransaction", this.transaction);
      this.transaction.name = "";
      this.transaction.amount = "";
    },
  },
};
</script>

<style></style>
