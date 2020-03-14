<template>
  <div class="container">
    <br />
    <h1 class="title">Test 4</h1>

    <input type="text" class="users-string" v-model="userArr1" />
    <p class="string">
      <span class="_green">Users Arr1:</span>
      " {{ userArr1 }} "
    </p>
    <input type="text" class="users-string" v-model="userArr2" />
    <p class="string">
      <span class="_green">Users Arr2:</span>
      " {{ userArr2 }} "
    </p>

    <br />
    <button type="button" class="button" @click="onAnalysis">Analysis</button>
    <p class="string">
      <span class="_green">Number of matches:</span>
      " {{ numberOfMatches }} "
    </p>
    <br />
    {{ filteredArr1 }}
    <br />
    {{ filteredArr2 }}
    <hr />
  </div>
</template>

<script>
export default {
  name: "jm3",

  data() {
    return {
      userArr1: ["Erlang", "JavaScript", "Erlang", "Erlang", "Go", "Go", "ZZZ"],
      userArr2: ["Go", "C++", "Erlang", "C++", "C++", "C#", "YYY"],

      filteredArr1: [],
      filteredArr2: [],

      numberOfMatches: 0
    };
  },

  methods: {
    onAnalysis() {
      this.numberOfMatches = 0;

      //  deleting identical elements from arrays
      this.filterArray(this.userArr1, this.filteredArr1);
      this.filterArray(this.userArr2, this.filteredArr2);

      // searching for identical elements in arrays
      for (let i = 0; i < this.filteredArr1.length; i++) {
        let arr1Elem = this.filteredArr1[i];

        for (let n = 0; n < this.filteredArr2.length; n++) {
          let arr2Elem = this.filteredArr2[n];

          if (arr1Elem == arr2Elem) this.numberOfMatches++;
        }
      }
    },

    //  deleting identical elements from an array
    filterArray(users, filtered) {
      let sorted = users.sort();
      for (let i = 0; i < sorted.length; i++) {
        if (sorted[i] != sorted[i + 1]) {
          filtered.push(sorted[i]);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
._green {
  color: green;
}
</style>