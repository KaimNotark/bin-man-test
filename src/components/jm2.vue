<template>
  <div class="container">
    <br />
    <input type="text" class="users-string" v-model="originalString" />
    <p class="string">
      <span class="_green">Original string:</span>
      " {{ originalString }} "
    </p>
    <br />
    <button type="button" class="button" @click="onAnalysis">Analysis</button>
    <p class="string">
      <span class="_green">Final string:</span>
      " {{ finalString }} "
    </p>
    {{ allWordsInString }}
    <br>
    {{ numberOfRepeatedWord }}
    <hr />
  </div>
</template>

<script>
export default {
  name: "jm2",

  data() {
    return {
      originalString: "alpha beta beta gamma gamma gamma delta beta beta delta",
      finalString: "",
      lengthOfString: 0,

      allWordsInString: [],
      numberOfRepeatedWord: []
    };
  },

  methods: {
    onAnalysis() {
      // str.toLowerCase().indexOf("...")
      this.allWordsInString = this.originalString.split(" ");

      for (let i = 0; i < this.allWordsInString.length; i++) {
        let currentWord = this.allWordsInString[i];

        for (let n = i+1; n < this.allWordsInString.length-i; n++) {
          let nextWord = this.allWordsInString[n];

          if (currentWord == nextWord) {
            this.numberOfRepeatedWord.push(i);
            this.allWordsInString[n] = "+";
          }
        }
      }
      console.log(
        "JM2--onAnalysis - allWordsInString= " + this.allWordsInString
      );
      // console.log(
      //   "JM2--onAnalysis - allWordsInString.length= " + this.allWordsInString.length
      // );

      // if (str.match(regexp)) {
      //   console.log("JM2--onAnalysis - originalString= " + this.originalString);
      // }
    }
  }
};
</script>

<style lang="scss" scoped>
._green {
  color: green;
}
</style>