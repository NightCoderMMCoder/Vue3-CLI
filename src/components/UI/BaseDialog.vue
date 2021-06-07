<template>
  <teleport to=".model">
    <div class="backdrop" v-if="showDialog"></div>
    <transition name="slide-down">
      <div class="dialog" v-if="showDialog">
        <div class="card">
          <div class="card-header">
            <h3>
              <slot name="header">
                Just Checking...
              </slot>
            </h3>
          </div>
          <div class="card-body">
            <p>
              <slot name="body"></slot>
            </p>
            <div class="btn-group">
              <slot name="actions">
                <base-button>Close</base-button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  components: { BaseButton },
  props: ["showDialog"],
};
</script>

<style scoped>
.backdrop {
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: var(--box-shadow);
  max-width: 80%;
  width: 500px;
}

h3 {
  background: #9c88ff;
  color: white;
  margin: 0;
  padding: 20px;
}
.card-body {
  padding: 20px;
}

.btn-group {
  text-align: right;
}
p {
  margin-top: 0;
}
.slide-down-enter-from,
.slide-down-leave-to {
  top: 45%;
  opacity: 0;
}
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.5s ease-in-out;
}
</style>
