const formatMoney = {
  methods: {
    formatToCurrency(value) {
      return Math.abs(value)
        .toFixed(2)
        .replace(/\d(?=(\d{3})+\.)/g, "$&,");
    },
  },
};
export default formatMoney;
