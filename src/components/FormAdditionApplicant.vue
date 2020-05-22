<template>
  <div class="form-container">
    <form
      class="form"
      id="formId"
      name="form"
      autocomplete="on"
      @submit="onSubmit"
      @reset="onReset"
    >
      <h1 class="form-title">Добавление соискателя</h1>
      <hr class="form-devider" />
      <h2 class="form-subtitle">Основные данные</h2>

      <label class="form__label">
        <span class="form__span">ФИО</span>
        <input
          class="form__input"
          type="text"
          name="name"
          autocomplete="on"
          placeholder="Введите ФИО"
          spellcheck="true"
          required
          v-model="formFields.name"
        />
      </label>

      <label class="form__label">
        <span class="form__span">Вакансия</span>

        <select
          @change="lighted"
          :class="[ 'form__select', { '_light' : isLight }]"
          required
          v-model="formFields.vacancy"
        >
          <OptionInSelect
            v-for="option in options"
            :key="option.id"
            :option="option"
            @del="alert('deleted')"
          />
        </select>
      </label>

      <InputLoad
        load-id="0"
        accept-type="photo"
        ref="photoInput"
        class="form__input-load-file"
        @addFilePhoto="addFilePhoto"
        :all-applicants="allApplicants"
      />

      <hr class="form-devider" />
      <h2 class="form-subtitle">Контактные данные</h2>

      <span class="form__span form__input-header">Номер телефона</span>
      <InputInForm
        ref="inputPhone"
        v-bind="phone"
        @formInputsPhone="formInputsPhone"
        :all-applicants="allApplicants"
      />

      <span class="form__span form__input-header">Введите E-mail</span>
      <InputInForm
        ref="inputMail"
        v-bind="mail"
        @formInputsMail="formInputsMail"
        :all-applicants="allApplicants"
      />

      <hr class="form-devider" />
      <h2 class="form-subtitle">Резюме и результаты тестового задания</h2>

      <InputLoad
        load-id="1"
        ref="summaryInput"
        accept-type="summary"
        @addFileSummary="addFileSummary"
        :all-applicants="allApplicants"
      />

      <InputLoad
        load-id="2"
        ref="testInput"
        accept-type="test"
        @addFileTest="addFileTest"
        :all-applicants="allApplicants"
      />

      <hr class="form-devider" />
      <h2 class="form-subtitle">Оценка соискателя</h2>

      <div class="form__rating-container">
        <RatingInForm
          v-for="(rating, index) in ratings"
          v-model="ratings[index]"
          :key="rating.id"
          :rating="rating"
          :all-applicants="allApplicants"
          ref="ratings"
          @raitingNumber="raitingNumber"
          @raitingIndex="raitingIndex(index)"
        />
      </div>

      <hr class="form-devider" />

      <div class="container-row">
        <button type="reset" class="form__btn-reset" @click="onReset">Очистить</button>

        <button
          type="submit"
          :class="[ 'form__btn-submit', { '_hide' : isButtonSubmitHide }]"
        >Добавить соискателя</button>

        <button
          type="button"
          :class="[ 'form__btn-submit', { '_hide' : isButtonEditHide }]"
          @click="onEdit"
        >Изменить данные</button>
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

  props: {
    allApplicants: {
      type: Array,
      required: true
    },
    isButtonSubmitHide: {
      type: Boolean,
      required: true
    },
    isButtonEditHide: {
      type: Boolean,
      required: true
    }
  },

  data: () => ({
    isLight: true,
    errors: null,

    raitingBuffer: 0,
    ratingSummary: 0,
    ratingTest: 0,
    ratingInterview: 0,

    editRowId: null,

    formFields: {
      name: "",
      vacancy: "",
      phone1: "",
      mail1: ""
    },

    options: [
      {
        id: "0",
        value: 550,
        content: "Выберите вакансию"
      },
      {
        id: "1",
        value: "Junior Frontend Developer",
        content: "Junior Frontend Developer"
      },
      {
        id: "2",
        value: "Middle Frontend Developer",
        content: "Middle Frontend Developer"
      },
      {
        id: "3",
        value: "Senior Frontend Developer",
        content: "Senior Frontend Developer"
      },
      {
        id: "4",
        value: "TeamLead Frontend Developer",
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
    onEdit(event) {
      event.preventDefault();
      event.stopPropagation();

      const payload = {
        name: this.formFields.name,
        vacancy: this.formFields.vacancy,
        phone1: this.formFields.phone1,
        mail1: this.formFields.mail1,
        ratingSummary: this.ratingSummary,
        ratingTest: this.ratingTest,
        ratingInterview: this.ratingInterview
      };

      this.$emit("onEdit", payload, this.editRowId);

      this.onReset();
      // event.target.reset();
    },

    editRow(id) {
      // console.log("FORM -- editRow method run - ID =", id);
      this.editRowId = id;
      // console.log("FORM -- editRow method run - editRowId= ", this.editRowId);
    },

    editRowByIndex(index) {
      console.log("FORM -- editRowByIndex method run - index= ", index);

      this.lighted();

      this.formFields.name = this.allApplicants[index].name;
      this.formFields.vacancy = this.allApplicants[index].vacancy;

      this.$refs.inputPhone.editPhone1(index);
      this.$refs.inputMail.editMail1(index);

      this.$refs.ratings[0].editSummary(index);
      this.$refs.ratings[1].editTest(index);
      this.$refs.ratings[2].editInterview(index);

      this.$refs.photoInput.onEditPhoto(index);
      this.$refs.summaryInput.onEditSummary(index);
      this.$refs.testInput.onEditTest(index);
    },

    lighted() {
      this.isLight = false;
      // console.log("isLight = " + this.isLight);
      // console.log("options.id = " + this.options[2].id);
    },

    addFilePhoto(file) {
      // this.filePhoto = file;
      // console.log("filePhoto = " + this.filePhoto);
      this.$emit("addFilePhoto", file);
    },
    addFileSummary(file) {
      this.$emit("addFileSummary", file);
    },
    addFileTest(file) {
      this.$emit("addFileTest", file);
    },

    onSubmit(event) {
      // console.log("FORM onSubmit method run.");

      event.preventDefault();
      event.stopPropagation();

      const payload = {
        name: this.formFields.name,
        vacancy: this.formFields.vacancy,
        phone1: this.formFields.phone1,
        mail1: this.formFields.mail1,
        ratingSummary: this.ratingSummary,
        ratingTest: this.ratingTest,
        ratingInterview: this.ratingInterview
        // photo: this.FilePhoto
      };
      // payload.append('photo', this.FilePhoto);

      this.$emit("addApplicants", payload);
      // console.log("raitingSummary = " + this.ratingSummary);

      this.onReset();
      event.target.reset();

      // console.log("FORM payload = " + payload);
    },

    formInputsPhone(phone1) {
      this.formFields.phone1 = phone1;
      // console.log("FORM -- formInputsPhone - formFields.phone1 = " + this.formFields.phone1 );
    },

    formInputsMail(mail1) {
      this.formFields.mail1 = mail1;
      // console.log("FORM -- formInputsPhone - formFields.mail1 = " + this.formFields.mail1 );
    },

    onReset() {
      // console.log("FORM -- onReset method is run.");

      this.$refs.photoInput.onReset();
      this.$refs.summaryInput.onReset();
      this.$refs.testInput.onReset();

      // this.$refs.photoInput.$refs.fileUpload.value = null;

      this.$refs.ratings[0].onReset();
      this.$refs.ratings[1].onReset();
      this.$refs.ratings[2].onReset();

      this.$refs.inputPhone.onReset();
      this.$refs.inputMail.onReset();

      this.formFields.name = null;
      this.formFields.vacancy = null;
      this.isLight = true;
    },

    raitingNumber(selected) {
      // console.log("FORM -- raitingNumber - № = " + selected);
      this.raitingBuffer = selected;
    },

    raitingIndex(index) {
      // console.log("FORM -- raitingNumber - index = " + index);
      if (index === 0) this.ratingSummary = this.raitingBuffer;
      if (index === 1) this.ratingTest = this.raitingBuffer;
      if (index === 2) this.ratingInterview = this.raitingBuffer;

      // console.log("FORM -- ratingSummary = " + this.ratingSummary);
      // console.log("FORM -- ratingTest = " + this.ratingTest);
      // console.log("FORM -- ratingInterview = " + this.ratingInterview);
    },

    created() {}
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

  &-container {
    width: 658px;
    height: calc(100vh - 150px);
  }

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
    margin-top: 10px;
  }

  &__label {
    display: flex;
    flex-direction: column;
  }

  &__span {
    @extend %text-span;
    margin-top: 16px;
  }

  &__input {
    @extend %text-input;
    @extend %input;
    margin-top: 10px;
  }

  &__input::-webkit-input-placeholder {
    color: $color-text-light;
  }

  &__select {
    @extend %select;
    @extend %option;
    margin-top: 10px;
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

._hide {
  display: none;
}
</style>