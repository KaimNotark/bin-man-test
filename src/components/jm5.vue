<template>
  <div class="container">
    <br />
    <h1 class="title">Test 5</h1>

    <input type="text" class="users-string" v-model="stringOfNumbers" />
    <p class="string">
      <span class="_green">Users numbers:</span>
      " {{ stringOfNumbers }} "
    </p>

    <br />
    <button type="button" class="button" @click="onAnalysis">Analysis</button>
    <p class="string">
      <span class="_green">Max and Min numbers:</span>
      " {{ stringMaxMin }} "
    </p>
    <br />
    {{ arrayOfNumbers }}
    <br />
    {{ sortedArray }}
    <br />
    {{ maxMin }}
    <hr />
  </div>
</template>

<script>
export default {
  name: "jm5",

  data() {
    return {
      stringOfNumbers: "1 9 3 4 -5",
      stringMaxMin: "",

      arrayOfNumbers: [],
      sortedArray: [],
      maxMin: [] // maxMin[0]=MAX, maxMin[1]=MIN
    };
  },

  methods: {
    onAnalysis() {
      this.arrayOfNumbers = this.stringOfNumbers.split(" ");
      
      this.sortedArray = this.arrayOfNumbers;
      this.sortedArray.sort((a, b) => a - b);

      this.maxMin[0] = this.sortedArray[this.sortedArray.length - 1];
      this.maxMin[1] = this.sortedArray[0];

      this.stringMaxMin = this.maxMin.join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
._green {
  color: green;
}
</style>