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
          <img :src="row.phoneImg" alt="Телефон" class="phone-border__img" />
        </div>
        <div class="phone-text">
          <p class="phone-text__number" :class="{ '_margin-top-10px': isHiddenPhone, '_light-gray': isLightGrayPhone }">{{ row.phone }}</p>
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
          <img :src="row.mailImg" alt="E-mail" class="mail-border__img" />
        </div>
        <div class="mail-text">
          <p class="mail-text__e-mail" :class="{ '_margin-top-10px': isHiddenMail, '_light-gray': isLightGrayMail }">{{ row.mail }}</p>
          <button
            type="button"
            class="mail-text__button"
            :class="{ '_hidden': isHiddenMail }"
          >Показать еще 1 e-mail</button>
        </div>
      </div>
    </td>
    <td class="_width-140px"></td>
    <td>
      <RaitingBinman />
    </td>
    <td>
      <div class="container-buttons">
        <ul class="buttons-list">
          <li class="buttons-item">
            <button type="button" class="buttons-item__button">
              <img src="../../public/images/resume.png" alt="Резюме" class="buttons-item__picture" />
            </button>
          </li>
          <li class="buttons-item">
            <button type="button" class="buttons-item__button _margin">
              <img src="../../public/images/archive.png" alt="Архив" class="buttons-item__picture" />
            </button>
          </li>
          <li class="buttons-item">
            <button type="button" class="buttons-item__button">
              <img
                src="../../public/images/favorites.png"
                alt="Избранное"
                class="buttons-item__picture"
              />
            </button>
          </li>
        </ul>
      </div>
    </td>
  </tr>
</template>

<script>
import RaitingBinman from "./RatingBinman.vue";

export default {
  name: "TableRow",

  components: {
    RaitingBinman
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
  }
}

.container-buttons {
  width: 91px;
}

.buttons {
  &-list {
    display: flex;
    justify-content: space-between;
  }

  &-item {
    display: block;

    &__button {
      width: 36px;
      height: 36px;
      border: solid 1px $color-button-border;
      border-radius: 3px;
      background: $color-white;
      transition: background-color 0.1s ease, border-color 0.3s ease;
      cursor: pointer;
    }
    &__button:hover {
      background-color: $color-button-background-gray;
      border-color: $color-gray;
      // transform: scale(1.05);
    }

    &__picture {
    }
  }
}

._hidden {
  display: none;
}

._light-gray {
  color: $color-table__light-gray;
}

._letter-spacing-03 {
  letter-spacing: -1px;
}

._margin-top-10px {
  margin-top: 10px;
}
._margin-left-10px {
  margin-left: 10px;
}
._margin-left-19px {
  margin-left: 19px;
}
._width-140px {
  width: 140px;
}
._margin {
  margin: 0 5px 0 5px;
}

._height-36px {
  height: 36px;
}
</style>