<template>
  <div class="container">
    <form class="form" id="formId" autocomplete="on">
      <h1 class="form-title">Добавление соискателя</h1>
      <hr class="form-devider" />
      <h2 class="form-subtitle _margin-top-22px">Основные данные</h2>

      <label class="form__label _margin-top-17px">
        <span class="form__span">ФИО</span>
        <input
          class="form__input _margin-top-7px"
          type="text"
          name="name"
          autocomplete="on"
          placeholder="Введите ФИО"
          spellcheck="true"
          required
        />
      </label>

      <label class="form__label _margin-top-21px">
        <span class="form__span">Вакансия</span>
        <select class="form__select _light _margin-top-5px" required>
          <option value="0" class="form__option">Выберите вакансию</option>
          <option value="JFD" class="form__option">Junior Frontend Developer</option>
          <option value="MFD" class="form__option">Middle Frontend Developer</option>
          <option value="SFD" class="form__option">Senior Frontend Developer</option>
          <option value="TFD" class="form__option">TeamLead Frontend Developer</option>
        </select>
      </label>

      <InputLoadPhoto class="form__input-load-file" />

      <hr class="form-devider" />
      <h2 class="form-subtitle _margin-top-22px">Контактные данные</h2>

      <label class="form__label _margin-top-17px">
        <span class="form__span">Номер телефона</span>
        <input
          class="form__input _margin-top-7px"
          type="tel"
          name="phone"
          maxlength="11"
          pattern="2[0-9]{3}-[0-9]{3}"
          autocomplete="off"
          placeholder="Введите номер телефона"
          spellcheck="true"
          required
        />
        <button type="button" class="form__btn-add-phone">Добавить еще один номер телефона</button>
      </label>

      <label class="form__label _margin-top-20px">
        <span class="form__span">e-mail</span>
        <input
          class="form__input _margin-top-7px"
          type="email"
          name="email"
          autocomplete="on"
          placeholder="Введите E-mail"
          required
        />
        <button type="button" class="form__btn-add-mail">Добавить еще один e-mail</button>
      </label>

      <hr class="form-devider" />
      <h2 class="form-subtitle _margin-top-21px">Резюме и результаты тестового задания</h2>

      <InputLoadSummary class="form__input-load-summary _margin-top-12px" />

      <InputLoadTest class="form__input-load-test _margin-top-14px" />

      <hr class="form-devider" />
      <h2 class="form-subtitle _margin-top-22px">Оценка соискателя</h2>

      <div class="form__rating-container _margin-top-5px">
        <RatingSummary class="form__rating-summary"></RatingSummary>
        <RatingTest class="form__rating-test"></RatingTest>
        <RatingInterview class="form__rating-interview"></RatingInterview>
      </div>

      <hr class="form-devider" />

      <div class="container-row">
        <button type="reset" class="form__btn-reset">Отменить</button>
        <button type="submit" class="form__btn-submit">Добавить соискателя</button>
      </div>
    </form>
  </div>
</template>

<script>
import InputLoadPhoto from "./InputLoadPhoto.vue";
import InputLoadSummary from "./InputLoadSummary.vue";
import InputLoadTest from "./InputLoadTest.vue";
import RatingSummary from "./RatingSummary.vue";
import RatingTest from "./RatingTest.vue";
import RatingInterview from "./RatingInterview.vue";

export default {
  name: "FormAdditionApplicant",

  components: {
    InputLoadPhoto,
    InputLoadSummary,
    InputLoadTest,
    RatingSummary,
    RatingTest,
    RatingInterview
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

%title {
  color: $color-text-main;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
}

%subtitle {
  color: $color-text-main;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
}

%text-span {
  color: $color-text-main;
  font-size: 11px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
}

%text-input {
  color: $color-text-main;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
}

%input {
  height: 35px;
  border: 1px solid $color-input-border;
  background: $color-input-background;
  border-radius: 3px;
  padding: 10px;
}

%select {
  height: 38px;
  border: 1px solid $color-input-border;
  background: $color-input-background;
  border-radius: 3px;
  padding: 10px;
}

%option {
  color: $color-text-main;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
}

%text-rem {
  color: $color-text-light;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
}

%btn-add {
  height: 14px;
  padding: 1px 0 0px 0;
  color: $color-text-light;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  border-top: none;
  border-right: none;
  border-bottom: 1px solid $color-text-light;
  border-left: none;
  background-color: $color-white;
  transition: background-color 0.1s ease, color 0.3s ease;
  cursor: pointer;
}

.container {
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0px 10em white inset !important;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border: 1px solid $color-input-focus;
}

.container-row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.form {
  width: 650px;
  height: 1000px;
  border: 1px solid $color-gray;
  background-color: $color-white;
  padding: 23px;

  &-devider {
    margin-top: 17px;
    width: 650px;
    border: none;
    color: $color-input-background;
    background-color: $color-input-background;
    height: 1px;
    margin-left: -25px;
  }

  &-title {
    @extend %title;
    margin-top: -2px;
  }

  &-subtitle {
    @extend %subtitle;
  }

  &__label {
    display: flex;
    flex-direction: column;
  }

  &__span {
    @extend %text-span;
  }

  &__input {
    @extend %text-input;
    @extend %input;
  }

  &__input::-webkit-input-placeholder {
    color: $color-text-light;
  }

  &__select {
    @extend %select;
    @extend %option;
  }

  &__option {
    @extend %option;
  }

  ._light {
    color: $color-text-light;
  }

  &__rem {
    @extend %text-rem;
    margin-top: 10px;
  }
  &__input-load-file {
    margin-top: 16px;
  }
  &__btn-add-phone {
    @extend %btn-add;
    width: 173px;
    margin-top: 5px;
  }
  &__btn-add-phone:hover {
    color: $color-text-main;
    border-color: $color-text-main;
  }

  &__btn-add-mail {
    @extend %btn-add;
    width: 124px;
    margin-top: 5px;
  }
  &__btn-add-mail:hover {
    color: $color-text-main;
    border-color: $color-text-main;
  }
  &__rating-container {
    display: flex;
    justify-content: space-between;
    width: 550px;
    margin-top: 25px;
  }
  // &__rating-summary {
  //   display: block;
  // }
  &__rating-test {
    margin-left: 73px;
  }
  // &__rating-interview {
  //   display: block;
  // }

  &__btn-reset {
    width: 49%;
    height: 36px;
    border: solid 1px #d4e2e7;
    background-color: #ffffff;
    border-radius: 3px;
    color: #475364;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 700;
    line-height: 13px;
    text-transform: uppercase;
    transition: background-color 0.1s ease, border-color 0.3s ease;
    cursor: pointer;
  }
  &__btn-reset:hover {
    border-color: $color-input-focus;
    background-color: #e4f0f5;
  }

  &__btn-submit {
    width: 49%;
    height: 36px;
    border: solid 1px #d4e2e7;
    background: #386bf2;
    border-radius: 3px;
    color: #ffffff;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 700;
    line-height: 13px;
    text-transform: uppercase;
    transition: background-color 0.1s ease, border-color 0.3s ease;
    cursor: pointer;
  }
  &__btn-submit:hover {
    border-color: #1a56fa;
    background-color: #4d7bf7;
  }
}

._margin-top-5px {
  margin-top: 5px;
}
._margin-top-7px {
  margin-top: 7px;
}
._margin-top-12px {
  margin-top: 12px;
}
._margin-top-13px {
  margin-top: 13px;
}
._margin-top-14px {
  margin-top: 14px;
}
._margin-top-17px {
  margin-top: 17px;
}
._margin-top-20px {
  margin-top: 20px;
}
._margin-top-21px {
  margin-top: 21px;
}
._margin-top-22px {
  margin-top: 22px;
}
._margin-top-27px {
  margin-top: 27px;
}
</style>