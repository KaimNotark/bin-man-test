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

    <td width="140"></td>

    <td>
      <Raiting :rating-color="row.ratingColor" :rating-value="row.ratingValue" />
    </td>

    <td>
      <div class="container-buttons">
        <ul class="buttons-list">
          <ResumeButton v-for="button in buttons" :key="button.id" :button="button" />
        </ul>
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
    isNonePhone () {
      return this.phone && this.phone.length
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