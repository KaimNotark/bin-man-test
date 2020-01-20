<template>
  <div class="form-container">
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
        <!-- :class="[{'_button-hidden' : isButtonVisible }, inputButtonStyle]" {'_light' : option.id=='0'},-->

        <select
          @change="lighted"
          :class="[ 'form__select',  '_margin-top-5px', { '_light' : isLight }]"
          required
        >
          <OptionInSelect
            v-for="option in options"
            :key="option.id"
            :option="option"
            @del="alert('deleted')"
          />
        </select>
      </label>

      <InputLoad load-id="0" accept-type="photo" class="form__input-load-file" />

      <hr class="form-devider" />
      <h2 class="form-subtitle _margin-top-22px">Контактные данные</h2>

      <span class="form__span form__input-header">Номер телефона</span>
      <InputInForm v-bind="phone" />

      <span class="form__span form__input-header">Введите E-mail</span>
      <InputInForm v-bind="mail" />

      <hr class="form-devider" />
      <h2 class="form-subtitle _margin-top-22px">Резюме и результаты тестового задания</h2>

      <InputLoad
        load-id="1"
        accept-type="summary"
        class="form__input-load-summary _margin-top-12px"
      />

      <InputLoad load-id="2" accept-type="test" class="form__input-load-test _margin-top-17px" />

      <hr class="form-devider" />
      <h2 class="form-subtitle _margin-top-22px">Оценка соискателя</h2>

      <div class="form__rating-container _margin-top-5px">
        <RatingInForm v-for="rating in ratings" :key="rating.id" :rating="rating" />
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
import AwesomeMask from "awesome-mask";
import InputLoad from "./InputLoad.vue";
import RatingInForm from "./RatingInForm.vue";
import OptionInSelect from "./OptionInSelect.vue";
import InputInForm from "./InputInForm.vue";

export default {
  name: "FormAdditionApplicant",

  components: {
    InputLoad,
    OptionInSelect,
    RatingInForm,
    InputInForm
  },

  directives: {
    mask: AwesomeMask
  },

  data: () => ({
    isLight: true,

    options: [
      {
        id: "0",
        value: 550,
        content: "Выберите вакансию"
      },
      {
        id: "1",
        value: "JFD",
        content: "Junior Frontend Developer"
      },
      {
        id: "2",
        value: "MFD",
        content: "Middle Frontend Developer"
      },
      {
        id: "3",
        value: "SFD",
        content: "Senior Frontend Developer"
      },
      {
        id: "4",
        value: "TFD",
        content: "TeamLead Frontend Developer"
      }
    ],

    phone: {
      inputButtonText: "Добавить еще один номер телефона",
      inputTitle: "Номер телефона",
      inputText: "Введите номер телефона",
      inputType: "tel",
      inputName: "phone",
      inputAutocomplete: "off",
      inputSpellcheck: true,
      inputMaxlength: 11,
      inputButtonStyle: "form__btn-add-phone",
      inputPattern: "", //2[0-9]{3}-[0-9]{3}
      inputMask: "9 (999) 999-99-99"
    },

    mail: {
      inputTitle: "e-mail",
      inputButtonText: "Добавить еще один e-mail",
      inputButtonStyle: "form__btn-add-mail",
      inputText: "Введите E-mail",
      inputType: "email",
      inputName: "email",
      inputAutocomplete: "on",
      inputMaxlength: 80,
      inputPattern: "",
      inputSpellcheck: false,
      inputMask: ""
    },

    ratings: [
      {
        id: "0",
        title: "Оценка резюме"
      },
      {
        id: "1",
        title: "Оценка тестового задания"
      },
      {
        id: "2",
        title: "Оценка собеседования"
      }
    ]
  }),

  methods: {
    lighted() {
      this.isLight = false;
      console.log("isLight = " + this.isLight);
      console.log("options.id = " + this.options[2].id);
    }
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
  background-color: $color-input-background;
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

.form-container {
  width: 658px;
  // height: 504px;
  height: calc(100vh - 150px);
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border: 1px solid $color-input-focus;
}

// change text color by placeholder
::-webkit-input-placeholder {
  /* Chrome */
  color: $color-text-light;
}
:-ms-input-placeholder {
  /* IE 10+ */
  color: $color-text-light;
}
::-moz-placeholder {
  /* Firefox 19+ */
  color: $color-text-light;
  opacity: 1;
}
:-moz-placeholder {
  /* Firefox 4 - 18 */
  color: $color-text-light;
  opacity: 1;
}

// change background color by autofill
// input:-webkit-autofill,
// input:-webkit-autofill:hover,
// input:-webkit-autofill:focus,
// input:-webkit-autofill:active {
//   -webkit-box-shadow: 0 0 0px 10em $color-input-background inset !important;
// }

@-webkit-keyframes autofill {
  to {
    color: $color-text-main;
    background-color: $color-input-background;
  }
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-animation-name: autofill;
  -webkit-animation-fill-mode: both;
}

.container-row {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.form {
  width: 650px;
  background-color: $color-white;
  padding: 23px;

  &-devider {
    margin-top: 17px;
    width: 648px;
    border: none;
    color: $color-input-background;
    background-color: $color-input-background;
    height: 1px;
    margin-left: -23px;
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

  &__input-header {
    display: block;
    margin-top: 22px;
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
  &__btn-reset:focus {
    outline: none;
    border: solid 1px $color-text-black;
  }
  &__btn-reset:active {
    border: solid 2px $color-text-black;
    background-color: $color-text-main;
    color: $color-text-light;
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
  &__btn-submit:focus {
    outline: none;
    border: 1px solid #022891;
  }
  &__btn-submit:active {
    border: 2px solid #022891;
    background-color: #1a56fa;
    color: $color-nav__button-blue;
  }
}

._button-hidden {
  visibility: hidden;
}

._margin-top-5px {
  margin-top: 5px;
}
._margin-top-7px {
  margin-top: 7px;
}
._margin-top-10px {
  margin-top: 10px;
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