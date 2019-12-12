<template>
  <div class="container-form-input">
    <label v-for="formInput in formInputs" :key="formInput.formInputId" class="form__label">
      <span class="form__span">{{ inputTitle }}</span>
      <input
        v-model="formInput.formInputContent"
        class="form__input _margin-top-7px"
        :type="inputType"
        :name="inputName"
        :maxlength="inputMaxlength"
        :autocomplete="inputAutocomplete"
        :placeholder="inputText"
        required
        v-mask="inputMask"
        :pattern="inputPattern"
        :spellcheck="inputSpellcheck"
      />
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
    },
  },

  data: () => ({
    inputId: 0,
    inputContent: "",
    formInputs: [],

    isButtonVisible: false
  }),

  methods: {
    addInput: function() {
      if (this.inputId < 3) {
        this.formInputs.push({
          formInputId: this.inputId++,
          formInputContent: this.inputContent
        });
        if (this.inputId <= 2) {
          this.isButtonVisible = false;
        } else {
          this.isButtonVisible = true;
        }
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

.form {
  &__label {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  &__span {
    @extend %text-span;
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

._margin-top-7px {
  margin-top: 7px;
}
</style>