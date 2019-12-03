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
      <TableRow v-for="row in rows" :key="row.id" :row="row" class="main-table-row" />
    </tbody>
  </table>
</template>

<script>
import TableRow from "./TableRow.vue";

export default {
  name: "Table",

  components: {
    TableRow

    // RaitingBinman,
    // RatingDurkov,
    // RatingLebedin,
    // RatingChulkov,
    // RatingFedora
  },

  data: () => ({
    rows: [
      {
        id: "0",
        avatar: "/images/binman.png",
        name: "Бинман Иван Натанович",
        vacancy: "Вакансия: Full-stack разработчик",
        phone: "+7 (900) 800-70-60",
        mail: "ioan@binman.ru"
      },
      {
        id: "1",
        avatar: "/images/durkoff.png",
        name: "Дурков Павел Валерьевич",
        vacancy: "Вакансия: Full-stack разработчик",
        phone: "Телефон не указан",
        mail: "durkov@vkontakte.ru"
      },
      {
        id: "2",
        avatar: "/images/lebedin.png",
        name: "Лебедин Артеймий Андреевич",
        vacancy: "Вакансия: Web-дизайнер",
        phone: "+7 (800) 555-35-35",
        mail: "design@lebedin.ru"
      },
      {
        id: "3",
        avatar: "/images/noname.png",
        name: "Чулков Олег",
        vacancy: "Вакансия: Web-дизайнер",
        phone: "Телефон не указан",
        mail: "E-mail не указан"
      },
      {
        id: "4",
        avatar: "/images/fedora.png",
        name: "Федора Линукс Линусович",
        vacancy: "Вакансия: Front-end разработчик",
        phone: "+7 (800) 200-06-60",
        mail: "ioan@binman.ru"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

.main-table {
  border-collapse: collapse;
  background-color: $color-white;
  margin-top: 18px;
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

.main-table-row {}

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