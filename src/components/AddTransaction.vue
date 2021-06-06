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
      <small v-if="errors.name" class="error">{{ errors.name }}</small>
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
      <small v-if="errors.amount" class="error">{{ errors.amount }}</small>
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
      errors: {},
    };
  },
  methods: {
    addTransaction() {
      const isValidate = this.validation();
      if (isValidate) {
        this.$emit("addTransaction", this.transaction);
        this.transaction.name = "";
        this.transaction.amount = "";
      }
    },
    validation() {
      this.errors = {};
      let formValidate = true;
      for (let [key, value] of Object.entries(this.transaction)) {
        if (!value) {
          this.errors[key] = `Please Enter a ${key} field`;
          formValidate = false;
        }
      }
      return formValidate;
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
