<template>
  <table class="main-table">
      <tbody>
        <TableRow
          v-for="row in rows"
          :key="row.id"
          :row="row"
          :is-hidden-phone="row.isHiddenPhone"
          :is-hidden-mail="row.isHiddenMail"
          :is-light-gray-phone="row.isLightGrayPhone"
          :is-light-gray-mail="row.isLightGrayMail"
        />
      </tbody>
  </table>
</template>

<script>
import TableRow from "./TableRow.vue";

import { MockApi } from "../Api";

export default {
  name: "Table",

  components: {
    TableRow
  },

  data: () => ({
    rows: []
  }),

  async created() {
    this.rows = await MockApi.getApplicants();
  }
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
</style>