<template>
  <tr>
    <td>
      <div class="container-applicant">
        <img :src="row.avatar" alt="Аватар" class="applicant-img" />
        <div class="applicant-text">
          <p class="applicant-text__name">{{ row.name }}</p>
          <p class="applicant-text__vacancy">{{ row.vacancy }}</p>
        </div>
      </div>
    </td>
    <td>
      <div class="container-phone">
        <div class="phone-border">
          <img
            src="/images/phone.png"
            alt="Телефон"
            class="phone-border__img"
            :class="{ '_light-gray-img': isLightGrayPhone }"
          />
        </div>
        <div class="phone-text">
          <p
            class="phone-text__number"
            :class="{ '_margin-top-10px': isHiddenPhone, '_light-gray': isLightGrayPhone }"
          >{{ row.phone }}</p>
          <button
            type="button"
            class="phone-text__button"
            :class="{ '_hidden': isHiddenPhone }"
          >Показать еще 1 номер</button>
        </div>
      </div>
    </td>

    <td>
      <div class="container-mail">
        <div class="mail-border">
          <img
            src="/images/mail.png"
            alt="E-mail"
            class="mail-border__img"
            :class="{ '_light-gray-img': isLightGrayMail }"
          />
        </div>
        <div class="mail-text">
          <p
            class="mail-text__e-mail"
            :class="{ '_margin-top-10px': isHiddenMail, '_light-gray': isLightGrayMail }"
          >{{ row.mail }}</p>
          <button
            type="button"
            class="mail-text__button"
            :class="{ '_hidden': isHiddenMail }"
          >Показать еще 1 e-mail</button>
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
      <Raiting :rating-color="row.ratingColor" :rating-value="row.ratingValue" />
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
            <symbol id="icon-edit-3" viewBox="0 0 24 24">
              <title>edit-3</title>
              <path
                d="M12 21h9c0.552 0 1-0.448 1-1s-0.448-1-1-1h-9c-0.552 0-1 0.448-1 1s0.448 1 1 1zM15.793 2.793l-12.5 12.5c-0.122 0.121-0.217 0.28-0.263 0.465l-1 4c-0.039 0.15-0.042 0.318 0 0.485 0.134 0.536 0.677 0.862 1.213 0.728l4-1c0.167-0.041 0.33-0.129 0.465-0.263l12.5-12.5c0.609-0.609 0.914-1.41 0.914-2.207s-0.305-1.598-0.914-2.207-1.411-0.915-2.208-0.915-1.598 0.305-2.207 0.914zM17.207 4.207c0.219-0.219 0.504-0.328 0.793-0.328s0.574 0.109 0.793 0.328 0.328 0.504 0.328 0.793-0.109 0.574-0.328 0.793l-12.304 12.304-2.115 0.529 0.529-2.115z"
              />
            </symbol>
          </defs>
        </svg>
        <svg class="row-icon row-icon__hover">
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
            <symbol id="icon-trash-2" viewBox="0 0 24 24">
              <title>Удалить</title>
              <path
                d="M18 7v13c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-10c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-13zM17 5v-1c0-0.828-0.337-1.58-0.879-2.121s-1.293-0.879-2.121-0.879h-4c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v1h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1h1v13c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h10c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-13h1c0.552 0 1-0.448 1-1s-0.448-1-1-1zM9 5v-1c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h4c0.276 0 0.525 0.111 0.707 0.293s0.293 0.431 0.293 0.707v1zM9 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM13 11v6c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1z"
              />
            </symbol>
          </defs>
        </svg>
        <svg class="row-icon row-icon__hover">
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
    },

    isHiddenPhone: {
      type: Boolean,
      required: true
    },

    isHiddenMail: {
      type: Boolean,
      required: true
    },

    isLightGrayPhone: {
      type: Boolean,
      required: true
    },

    isLightGrayMail: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
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
  width: 230px;
  margin-left: 19px;
  margin-right: -22px;
}

.applicant {
  &-img {
    width: 40px;
    height: 40px;
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
  width: 174px;
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
    stroke: currentColor;
    fill: currentColor;

    &__hover {
      font-size: 18px;
      color: $color-white;
      transition: color 0.3s ease, border-color 0.3s ease,
        background-color 0.2s ease;
      border: 1px solid $color-nav__gray;
      border-radius: 3px;
      cursor: pointer;
    }

    &__hover:hover {
      color: $color-nav__button-blue;
      border-color: $color-nav__button-blue;
      background-color: $color-nav__button-dark-gray;
    }
    &__hover:focus {
      outline: none;
      color: $color-nav__button-blue;
      border-color: $color-nav__button-dark-blue;
      background-color: $color-nav__button-dark-gray;
    }
    &__hover:active {
      color: $color-nav__button-dark-blue;
      border-color: $color-nav__button-dark-blue;
      background-color: $color-nav__button-dark-gray;
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