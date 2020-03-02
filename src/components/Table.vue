<template>
  <table class="main-table">
    <tbody>
      <TableRow
        v-for="row in allApplicants"
        :key="row.id"
        :row="row"
        @removeById="removeById"
        @editById="editById"
      />
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

  data: () => ({
    // rowId: null
  }),

  props: {
    allApplicants: {
      type: Array,
      required: true
    }
  },

  methods: {
    editById() {
      console.log("TABLE -- button edit was pressed");
      this.$emit("editById");
    },

    removeById(rowId) {
      console.log("TABLE it's work ID = " + rowId);
      this.$emit("removeById", rowId);
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