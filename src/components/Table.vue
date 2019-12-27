<template>
  <table class="main-table">
    <thead>
      <tr>
        <th>
          <span class="_margin-left-19px">Соискатель</span>
        </th>
        <th>Телефон</th>
        <th>E-mail</th>
        <th class="_width-140px"></th>
        <th>Оценка соискателя</th>
        <th></th>
      </tr>
    </thead>

    <tfoot>
      <tr>
        <td colspan="6" class="_height-36px">
          <button type="button" class="main-table__button">Показать еще</button>
        </td>
      </tr>
    </tfoot>

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

import { MockApi } from '../Api';

export default {
  name: "Table",

  components: {
    TableRow
  },

  data: () => ({
    rows: []
  }),

  async created () {
    this.rows = await MockApi.getApplicants()
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

.main-table__button {
  width: 100%;
  height: 34px;
  border: solid 1px $color-white;
  border-radius: 3px;
  background: $color-white;
  transition: background-color 0.1s ease, color 0.3s ease;
  cursor: pointer;

  color: $color-text-main;
  font-size: 11px;
  font-weight: 700;
  line-height: 11px;
  text-transform: uppercase;
}
.main-table__button:hover {
  background-color: $color-button-background-gray;
  color: $color-nav__button-dark-gray;
}

th {
  color: $color-text-main;
  font-size: 11px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
  text-align: left;
  height: 41px;
}

._margin-left-19px {
  margin-left: 19px;
}
._width-140px {
  width: 140px;
}
._height-36px {
  height: 36px;
}
</style>