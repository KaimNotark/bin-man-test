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

export default {
  name: "Table",

  components: {
    TableRow
  },

  data: () => ({
    rows: [
      {
        id: "0",
        avatar: "/images/binman.png",
        name: "Бинман Иван Натанович",
        vacancy: "Вакансия: Full-stack разработчик",
        phone: "+7 (900) 800-70-60",
        mail: "ioan@binman.ru",
        isHiddenPhone: false,
        isHiddenMail: false,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#abd02d",
        ratingValue: "4.0"
      },
      {
        id: "1",
        avatar: "/images/durkoff.png",
        name: "Дурков Павел Валерьевич",
        vacancy: "Вакансия: Full-stack разработчик",
        phone: "Телефон не указан",
        mail: "durkov@vkontakte.ru",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: true,
        isLightGrayMail: false,
        ratingColor: "#ff5d00",
        ratingValue: "1.0"
      },
      {
        id: "2",
        avatar: "/images/lebedin.png",
        name: "Лебедин Артеймий Андреевич",
        vacancy: "Вакансия: Web-дизайнер",
        phone: "+7 (800) 555-35-35",
        mail: "design@lebedin.ru",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#dae700",
        ratingValue: "3.0"
      },
      {
        id: "3",
        avatar: "/images/noname.png",
        name: "Чулков Олег",
        vacancy: "Вакансия: Web-дизайнер",
        phone: "Телефон не указан",
        mail: "E-mail не указан",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: true,
        isLightGrayMail: true,
        ratingColor: "#ffa800",
        ratingValue: "2.0"
      },
      {
        id: "4",
        avatar: "/images/fedora.png",
        name: "Федора Линукс Линусович",
        vacancy: "Вакансия: Front-end разработчик",
        phone: "+7 (800) 200-06-60",
        mail: "ioan@binman.ru",
        isHiddenPhone: false,
        isHiddenMail: false,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#67c600",
        ratingValue: "5.0"
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