<template>
  <div class="container">
    <br>
    <input type="text" class="users-string" v-model="originalString">
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
    <hr>
  </div>
</template>

<script>
export default {
  name: "jm1",

  data() {
    return {
      originalString: "aaaa22122bbbbYZ",
      finalString: "",
      lengthOfString: 0
    };
  },

  methods: {
    onAnalysis() {
      this.lengthOfString = this.originalString.length;
      // console.log("JM1--onAnalysis - lengthOfString= " + this.lengthOfString);

      for (let i = 0; i < this.lengthOfString; i++) {
        if (parseInt(this.originalString[i])) {
          if (!parseInt(this.originalString[i + 1])) {
            this.finalString += this.originalString[i];
          } else {
            if (
              !(
                parseInt(this.originalString[i]) ==
                parseInt(this.originalString[i + 1])
              )
            )
              this.finalString += this.originalString[i];
          }
        } else {
          this.finalString += this.originalString[i];
        }
        // console.log("JM1--onAnalysis - i= " + i);
      }
      // console.log("JM1--onAnalysis - finalString= " + this.finalString);
    }
  }
};
</script>

<style lang="scss" scoped>
._green {
  color: green;
}
</style>