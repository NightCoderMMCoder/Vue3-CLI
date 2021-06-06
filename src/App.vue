<template>
  <div>
    <h1>Hello From App.vue</h1>
    <div>
      {{ text }}
      <input type="text" v-model="text" />
    </div>
    <div>
      {{ publicPost }}
      <input type="checkbox" v-model="publicPost" id="public" />
      <label for="public">Public</label>
    </div>
    <div>
      <div>{{ supports }}</div>
      <input type="checkbox" id="cdm" value="cdm" v-model="supports" />
      <label for="cdm">CDM</label>
      <input type="checkbox" id="crph" value="crph" v-model="supports" />
      <label for="crph">CRPH</label>
      <input
        type="checkbox"
        id="foodpanda"
        value="foodpanda"
        v-model="supports"
      />
      <label for="foodpanda">Food Panda</label>
    </div>
    <div>
      <div>{{ gender }}</div>
      <input type="radio" id="male" value="male" v-model="gender" />
      <label for="male">Male</label>
      <input type="radio" id="female" value="female" v-model="gender" />
      <label for="female">Female</label>
      <input type="radio" id="other" value="other" v-model="gender" />
      <label for="other">Other</label>
    </div>
    <div>
      <div>{{ select }}</div>
      <select id="" v-model="select">
        <option disabled value="">Please Select</option>
        <option
          v-for="(option, idx) in options"
          :key="idx"
          v-bind:value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
    <div>
      <div>{{ task }}</div>
      <input type="text" v-model.trim="task" />
      <div>{{ age }}</div>
      <input type="number" v-model.number="age" />
    </div>
    <p>{{ nameTransform }}</p>
    <div>
      <h1>Calculator App</h1>
      <input type="text" v-model.number="firstNum" />
      <select v-model="symbol">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <input type="text" v-model.number="secondNum" />
      =
      <span>
        {{ result }}
      </span>
    </div>
    {{ numberPlus }}
    <button v-on:click="this.numberPlus = Math.random()">Click Me</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "",
      publicPost: false,
      supports: [],
      gender: "",
      select: "",
      options: [
        {
          text: "A",
          value: "a",
        },
        {
          text: "B",
          value: "b",
        },
        {
          text: "C",
          value: "c",
        },
        {
          text: "D",
          value: "d",
        },
      ],
      task: "",
      age: 20,
      name: "myo thant kyaw",
      firstNum: "",
      secondNum: "",
      symbol: "+",
      showText: false,
      count: 100,
      number: 4,
    };
  },
  computed: {
    nameTransform() {
      return this.name.charAt(0).toUpperCase();
    },
    result() {
      if (this.symbol === "+") {
        return this.firstNum + this.secondNum;
      } else if (this.symbol === "-") {
        return this.firstNum - this.secondNum;
      } else if (this.symbol === "*") {
        return this.firstNum * this.secondNum;
      } else if (this.symbol === "/") {
        return this.firstNum / this.secondNum;
      }
    },
    numberPlus: {
      get() {
        return this.number + 1;
      },
      set(val) {
        this.number = val;
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
