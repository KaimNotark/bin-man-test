<template>
  <table class="main-table">
    <tbody>
      <!-- <div class="__red">counterApplicants -- {{ rows }}</div> -->

        <!-- :is-hidden-phone="row.isHiddenPhone"
        :is-hidden-mail="row.isHiddenMail"
        :is-light-gray-phone="row.isLightGrayPhone"
        :is-light-gray-mail="row.isLightGrayMail" -->
      <TableRow
        v-for="row in rows"
        :key="row.id"
        :row="row"
      />
    </tbody>
  </table>
</template>

<script>
import TableRow from "./TableRow.vue";

import { Applicants } from "../Api";

export default {
  name: "Table",

  components: {
    TableRow
  },

  data: () => ({
    rows: []
  }),

  props: {
    // allApplicants: {
    //   type: Array,
    //   required: true
    // }
  },

  created() {
    this.showApplicants();
  },

  methods: {
    async showApplicants() {
      console.log("TABLE Function SHOW ALL APPLICANTS run.");
      try {
        this.rows = await Applicants.showApplicants();
        console.log("TABLE allApplicants -- " + this.rows);
      } catch (error) {
        console.error(error);
      }
    }
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

.__red {
  color: red;
}
</style>