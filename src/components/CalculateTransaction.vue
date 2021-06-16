<template>
  <h4>Your Balance</h4>
  <h1 id="balance">{{ minusOrPlus }}{{ totalBalance }} ks</h1>
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
import formatAmountMixin from "../mixins/formatToCurrency";
export default {
  props: { transactions: Array },
  mixins: [formatAmountMixin],
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
    minusOrPlus() {
      return this.currencyToNumber(this.calcIncome) -
        this.currencyToNumber(this.calcExpense) ===
        0
        ? ""
        : this.currencyToNumber(this.calcIncome) >
          this.currencyToNumber(this.calcExpense)
        ? "+"
        : "-";
    },
  },
  methods: {
    currencyToNumber(value) {
      return Number(value.replace(/[^0-9\.]+/g, ""));
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
