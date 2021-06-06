<template>
  <h1>Test</h1>
</template>

<script>
export default {
  beforeUnmount() {
    console.log("beforeDestroy");
  },
  unmounted() {
    console.log("destroyed");
  },
};
</script>

<style></style>
