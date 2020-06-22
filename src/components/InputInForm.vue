<template>
  <div class="container-form-input">
    <label
      v-for="(formInput, index) in formInputs"
      :key="formInput.formInputId"
      class="form__label"
    >
      <input
        v-model="formInputs[index]"
        class="form__input"
        :type="inputType"
        :name="inputName"
        :maxlength="inputMaxlength"
        :autocomplete="inputAutocomplete"
        :placeholder="inputText"
        required
        v-mask="inputMask"
        :spellcheck="inputSpellcheck"
        @change="changeInput"
        :value="inputValue"
      />
      <!-- :content="inputContent" -->
    </label>

    <button
      type="button"
      :class="[{'_button-hidden' : isButtonVisible }, inputButtonStyle]"
      @click="addInput"
    >{{ inputButtonText }}</button>
  </div>
</template>

<script>
import AwesomeMask from "awesome-mask";

export default {
  name: "InputInForm",

  directives: {
    mask: AwesomeMask
  },

  props: {
    allApplicants: {
      type: Array,
      required: true
    },

    inputButtonText: {
      type: String,
      required: true
    },

    inputButtonStyle: {
      type: String,
      required: true
    },

    inputMask: {
      type: String,
      required: true
    },

    inputSpellcheck: {
      type: Boolean,
      required: true
    },

    inputTitle: {
      type: String,
      required: true
    },

    inputText: {
      type: String,
      required: true
    },

    inputType: {
      type: String,
      required: true
    },

    inputName: {
      type: String,
      required: true
    },

    inputAutocomplete: {
      type: String,
      required: true
    },

    inputMaxlength: {
      type: Number,
      required: true
    },

    inputPattern: {
      type: String,
      required: true
    }
  },

  data: () => ({
    inputId: 0,
    inputContent: "",
    formInputs: [],
    inputValue: "",

    isButtonVisible: false
  }),

  methods: {
    editPhone1(index) {
      this.formInputs[0] = this.allApplicants[index].phone1;
      this.inputValue = this.allApplicants[index].phone1;
    },

    editMail1(index) {
      this.formInputs[0] = this.allApplicants[index].mail1;
      this.inputValue = this.allApplicants[index].mail1;
    },

    onReset() {
      this.formInputs[0] = "";
      this.inputValue = "";
    },

    addInput() {
      if (this.formInputs.length < 3) {
        this.formInputs.push(this.inputContent);

        this.isButtonVisible = this.formInputs.length > 2;
      }
    },

    changeInput() {
      if (this.inputName === "phone") {
        this.$emit("formInputsPhone", this.formInputs[0]);
      }
      if (this.inputName === "email") {
        this.$emit("formInputsMail", this.formInputs[0]);
      }
    }
  },

  created() {
    this.addInput();
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

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
  margin-bottom: 5px;
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
textarea:focus {
  outline: none;
  border: 1px solid $color-input-focus;
}

button:focus {
  outline: none;
  color: $color-text-main;
  border-bottom: 1px solid $color-text-main;
}

.container-form-input {
  margin-top: 10px;
}

.form {
  &__label {
    display: flex;
    flex-direction: column;
  }

  &__input {
    @extend %text-input;
    @extend %input;
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
}

._button-hidden {
  visibility: hidden;
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
  -webkit-box-shadow: inset 0 0 0 10em $color-input-background !important;
}
</style>