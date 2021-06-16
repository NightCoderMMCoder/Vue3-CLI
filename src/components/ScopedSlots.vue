<template>
  <ul>
    <li v-for="(option, idx) in options" :key="idx">
      <slot :option="option"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  props: { options: Array },
};
</script>

<style></style>
