<template>
  <table class="main-table">
    <tbody>
      <TableRow
        v-for="(row, index) in allApplicants"
        v-model="row[index]"
        :key="row.id"
        :row="row"
        @removeById="removeById"
        @editById="editById"
        @rowIndex="rowIndex(index)"
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

  props: {
    allApplicants: {
      type: Array,
      required: true
    }
  },

  methods: {
    editById(rowId) {
      this.$emit("editById", rowId);
    },

    rowIndex(index) {
      this.$emit("rowIndex", index);
    },

    removeById(rowId) {
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