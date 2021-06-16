<template>
  <h1>Test</h1>
</template>

<script>
export default {
  props: { text: String },
  beforeUnmount() {
    console.log("beforeunmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  watch: {
    text(val) {
      console.log(val);
      setTimeout(() => {
        console.log(val);
      }, 1000);
    },
  },
};
</script>

<style></style>
