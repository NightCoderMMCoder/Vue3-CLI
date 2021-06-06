<template>
  <h4>Your Balance</h4>
  <h1 id="balance">{{ totalBalance }} ks</h1>

  <div class="inc-exp-container">
    <div>
      <h4>Income</h4>
      <p id="money-plus" class="money plus">{{ calcIncome }} ks</p>
    </div>
    <div>
      <h4>Expense</h4>
      <p id="money-minus" class="money minus">{{ calcExpense }} ks</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["transactions"],
  computed: {
    calcIncome() {
      return this.formatToCurrency(
        this.transactions
          .filter((transaction) => transaction.amount > 0)
          .reduce((total, cur) => total + cur.amount, 0)
      );
    },
    calcExpense() {
      return this.formatToCurrency(
        this.transactions
          .filter((transaction) => transaction.amount < 0)
          .reduce((total, cur) => total + cur.amount, 0)
      );
    },
    totalBalance() {
      return this.formatToCurrency(
        this.transactions.reduce((total, cur) => total + cur.amount, 0)
      );
    },
  },
  methods: {
    formatToCurrency(value) {
      return Math.abs(value)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
};
</script>

<style scoped>
.inc-exp-container {
  background-color: #fff;
  box-shadow: var(--box-shadow);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.inc-exp-container > div {
  flex: 1;
  text-align: center;
}

.inc-exp-container > div:first-of-type {
  border-right: 1px solid #dedede;
}

.money {
  font-size: 20px;
  letter-spacing: 1px;
  margin: 5px 0;
}

.money.plus {
  color: #2ecc71;
}

.money.minus {
  color: #c0392b;
}
</style>
