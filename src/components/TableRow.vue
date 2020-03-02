<template>
  <tr>
    <td>
      <div class="container-applicant">
        <img :src="row.photo.url" alt="Аватар" class="applicant-img applicant-img__text" />
        <div class="applicant-text">
          <p class="applicant-text__name">{{ row.name }}</p>
          <p class="applicant-text__vacancy">{{ row.vacancy }}</p>
        </div>
      </div>
    </td>
    <td>
      <div class="container-phone">
        <div class="phone-border">
          <img src="/images/phone.png" alt="Телефон" class="phone-border__img" />
          <!-- :class="{ '_light-gray-img': isLightGrayPhone }" -->
        </div>
        <div class="phone-text">
          <p class="phone-text__number">{{ row.phone1 }}</p>
          <!-- :class="{ '_margin-top-10px': isHiddenPhone, '_light-gray': isLightGrayPhone }" -->
          <button type="button" class="phone-text__button">Показать еще 1 номер</button>
          <!-- :class="{ '_hidden': isHiddenPhone }" -->
        </div>
      </div>
    </td>

    <td>
      <div class="container-mail">
        <div class="mail-border">
          <img src="/images/mail.png" alt="E-mail" class="mail-border__img" />
          <!-- :class="{ '_light-gray-img': isLightGrayMail }" -->
        </div>
        <div class="mail-text">
          <p class="mail-text__e-mail">{{ row.mail1 }}</p>
          <!-- :class="{ '_margin-top-10px': isHiddenMail, '_light-gray': isLightGrayMail }" -->
          <button type="button" class="mail-text__button">Показать еще 1 e-mail</button>
          <!-- :class="{ '_hidden': isHiddenMail }" -->
        </div>
      </div>
    </td>

    <td>
      <div class="container-buttons">
        <ul class="buttons-list">
          <ResumeButton v-for="button in buttons" :key="button.id" :button="button" />
        </ul>
      </div>
    </td>

    <td>
      <Raiting :rating-color="row.ratingColor" :rating-value="row.ratingAverage" />
    </td>

    <td>
      <div class="container-buttons">
        <svg
          aria-hidden="true"
          style="position: absolute; width: 0; height: 0; overflow: hidden;"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <symbol id="icon-edit-3" viewBox="-13 -13 58 58">
              <title>Изменить</title>
              <path
                d="M31.818 9.122l-8.939-8.939c-0.292-0.292-0.676-0.226-0.855 0.146l-1.199 2.497 8.35 8.35 2.497-1.199c0.372-0.178 0.438-0.563 0.146-0.855z"
              />
              <path
                d="M19.231 4.231l-8.231 0.686c-0.547 0.068-1.002 0.184-1.159 0.899-0 0.001-0 0.001-0.001 0.002-2.232 10.721-9.84 21.183-9.84 21.183l1.793 1.793 8.5-8.5c-0.187-0.392-0.293-0.83-0.293-1.293 0-1.657 1.343-3 3-3s3 1.343 3 3-1.343 3-3 3c-0.463 0-0.902-0.105-1.293-0.293l-8.5 8.5 1.793 1.793c0 0 10.462-7.608 21.183-9.84 0.001-0 0.001-0 0.002-0.001 0.714-0.157 0.831-0.612 0.898-1.159l0.686-8.231-8.538-8.539z"
              />
            </symbol>
          </defs>
        </svg>
        <svg @click="editById( row )" class="row-icon row-icon__hover">
          <use xlink:href="#icon-edit-3" />
        </svg>

        <svg
          aria-hidden="true"
          style="position: absolute; width: 0; height: 0; overflow: hidden;"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <symbol id="icon-trash-2" viewBox="-13 -13 58 58">
              <title>Удалить</title>
              <path d="M6 32h20l2-22h-24zM20 4v-4h-8v4h-10v6l2-2h24l2 2v-6h-10zM18 4h-4v-2h4v2z" />
            </symbol>
          </defs>
        </svg>
        <svg @click="removeById( row )" class="row-icon row-icon__hover">
          <use xlink:href="#icon-trash-2" />
        </svg>
      </div>
    </td>
  </tr>
</template>

<script>
import Raiting from "./Rating.vue";
import ResumeButton from "./ResumeButton.vue";

export default {
  name: "TableRow",

  components: {
    Raiting,
    ResumeButton
  },

  props: {
    row: {
      type: Object,
      required: true
    }

    // isHiddenPhone: {
    //   type: Boolean,
    //   required: true
    // },

    // isHiddenMail: {
    //   type: Boolean,
    //   required: true
    // },

    // isLightGrayPhone: {
    //   type: Boolean,
    //   required: true
    // },

    // isLightGrayMail: {
    //   type: Boolean,
    //   required: true
    // }
  },

  data: () => ({
    rowId: null,

    buttons: [
      {
        id: "0",
        buttonImg: "/images/resume.png",
        buttonInfo: "Резюме"
      },
      {
        id: "1",
        buttonImg: "/images/archive.png",
        buttonInfo: "Архив"
      },
      {
        id: "2",
        buttonImg: "/images/favorites.png",
        buttonInfo: "Избранное"
      }
    ]
  }),

  methods: {
    editById(row) {
      this.rowId = row.id;
      console.log("TABLE-ROW -- button edit was pressed ID = " + this.rowId);
      this.$emit("editById");
    },

    removeById(row) {
      this.rowId = row.id;
      console.log("button remove was pressed ID = " + this.rowId);
      this.$emit("removeById", this.rowId);
    }
  },

  computed: {
    isEmptyPhone() {
      return this.phone && this.phone.length;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

tr {
  border-bottom: 2px solid $color-input-background;
}

td {
  height: 70px;
}

.container-applicant {
  display: flex;
  justify-content: flex-start;
  width: 270px;
  margin-left: 19px;
  margin-right: -50px;
}

.applicant {
  &-img {
    width: 40px;
    height: 40px;
    border-radius: 4px;

    &__text {
      color: $color-text-light;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
    }
  }
  &-text {
    margin-left: 10px;

    &__name {
      color: $color-text-main;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      margin-top: 5px;
      margin-bottom: 3px;
    }
    &__vacancy {
      color: $color-text-light;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      margin-top: 5px;
      margin-bottom: 3px;
    }
  }
}

.container-phone {
  display: flex;
  justify-content: flex-start;
  width: 167px;
}

.phone {
  &-border {
    width: 36px;
    height: 36px;
    border-radius: 3px;
    background: $color-button-background-gray;

    &__img {
      display: block;
      margin: 10px auto;
    }
  }
  &-text {
    margin-left: 10px;

    &__number {
      color: $color-text-main;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0.3px;
      margin-top: 2px;
      margin-bottom: 3px;
    }
    &__button {
      color: $color-text-light;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      border-top: none;
      border-left: none;
      border-bottom: solid 1px $color-white;
      border-right: none;
      background-color: $color-white;
      transition: background-color 0.1s ease, color 0.3s ease;
      cursor: pointer;
      padding: 0;
      margin-top: 5px;
      margin-bottom: 3px;
    }
    &__button:hover {
      color: $color-text-main;
      border-bottom: solid 1px $color-text-main;
    }
    &__button:focus {
      outline: none;
      color: $color-text-main;
      border-bottom: solid 1px $color-text-main;
    }
    &__button:active {
      color: $color-text-black;
      border-bottom: solid 2px $color-text-black;
    }
  }
}

.container-mail {
  display: flex;
  justify-content: flex-start;
  width: 215px;
}

.mail {
  &-border {
    width: 36px;
    height: 36px;
    border-radius: 3px;
    background: $color-button-background-gray;

    &__img {
      display: block;
      margin: 12px auto;
    }
  }
  &-text {
    margin-left: 10px;

    &__e-mail {
      color: $color-text-main;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0.3px;
      margin-top: 2px;
      margin-bottom: 3px;
    }
    &__button {
      color: $color-text-light;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      border-top: none;
      border-left: none;
      border-bottom: solid 1px $color-white;
      border-right: none;
      background-color: $color-white;
      transition: background-color 0.1s ease, color 0.3s ease;
      cursor: pointer;
      padding: 0;
      margin-top: 5px;
      margin-bottom: 3px;
    }
    &__button:hover {
      color: $color-text-main;
      border-bottom: solid 1px $color-text-main;
    }
    &__button:focus {
      outline: none;
      color: $color-text-main;
      border-bottom: solid 1px $color-text-main;
    }
    &__button:active {
      color: $color-text-black;
      border-bottom: solid 2px $color-text-black;
    }
  }
}

.container-buttons {
  width: 120px;
}

.buttons {
  &-list {
    display: flex;
    justify-content: space-between;
  }
}

.row {
  &-icon {
    display: inline-block;
    width: 50px;
    height: 40px;
    stroke-width: 0;
    stroke: $color-text-main;
    fill: $color-text-main;

    &__hover {
      width: 36px;
      height: 36px;
      margin-left: 6px;
      border: solid 1px $color-button-border;
      border-radius: 3px;
      background: $color-white;
      transition: background-color 0.1s ease, border-color 0.3s ease;
      cursor: pointer;
    }

    &__hover:hover {
      background-color: $color-button-background-gray;
      border-color: $color-gray;
    }
    &__hover:focus {
      outline: none;
      background-color: $color-button-background-gray;
      border-color: $color-text-black;
    }
    &__hover:active {
      background-color: $color-gray;
      border-color: $color-header__dark-gray;
    }
  }
}

._hidden {
  display: none;
}

._margin-top-10px {
  margin-top: 10px;
}

._light-gray {
  color: $color-table__light-gray;
}

._light-gray-img {
  opacity: 0.5;
}
</style>