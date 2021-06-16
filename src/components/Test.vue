<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="main"></slot>
    </main>
    <footer>
      <slot name="footer">
        &copy; copyright 2021
      </slot>
    </footer>
  </div>
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
