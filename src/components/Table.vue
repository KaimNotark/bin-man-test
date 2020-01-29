<template>
  <table class="main-table">
    <tbody>
      <TableRow v-for="row in allApplicants" :key="row.id" :row="row" />
    </tbody>
  </table>
</template>

<script>
import TableRow from "./TableRow.vue";

export default {
  name: "Table",

  components: {
    TableRow
  },

  // data: () => ({
  // }),

  props: {
    allApplicants: {
      type: Array,
      required: true
    }
  }

  // methods: {
  //   
  // }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

.main-table {
  border-collapse: collapse;
  background-color: $color-white;
  width: 100%;
}

.__red {
  color: red;
}
</style>