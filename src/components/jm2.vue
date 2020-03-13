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
    <br />
    {{ repeatedWord }}
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
      repeatedWord: []
    };
  },

  methods: {
    onAnalysis() {
      this.allWordsInString = this.originalString.split(" ");

      let isDuble = false;

      for (let i = 0; i < this.allWordsInString.length; i++) {
        isDuble = false;
        let currentWord = this.allWordsInString[i];

        if (!(currentWord == "")) {
          for (let n = i + 1; n < this.allWordsInString.length; n++) {
            let nextWord = this.allWordsInString[n];

            if (currentWord == nextWord) {
              if (!isDuble) this.repeatedWord.push(nextWord);
              isDuble = true;
              this.allWordsInString[n] = "";
            }
          }
        }
      }

      this.finalString = this.repeatedWord.join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
._green {
  color: green;
}
</style>