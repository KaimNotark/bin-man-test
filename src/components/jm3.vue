<template>
  <div class="container">
    <br />
    <input type="text" class="users-string" v-model="usersYear" />
    <p class="string">
      <span class="_green">Users year:</span>
      " {{ usersYear }} "
    </p>
    <br />
    <button type="button" class="button" @click="onAnalysis">Analysis</button>
    <p class="string">
      <span class="_green">First 13-th:</span>
      " {{ first13th }} "
    </p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "jm3",

  data() {
    return {
      usersYear: "2019",
      first13th: ""
    };
  },

  methods: {
    onAnalysis() {
      for (let i = 0; i <= 11; i++) {
        let usersDate = new Date(this.usersYear, i, 13);
        // console.log("usersDate= " + usersDate);
        this.first13th = usersDate.getDay();
        // friday = 5
        console.log("i=" + i + " first13th= " + this.first13th);
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