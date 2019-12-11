<template>
  <div class="container-form-input">
    <label class="form__label _margin-top-17px">
      <span class="form__span">Номер телефона</span>
      <input
        class="form__input _margin-top-7px"
        type="tel"
        v-mask="'9 (999) 999-99-99'"
        name="phone"
        maxlength="11"
        pattern="2[0-9]{3}-[0-9]{3}"
        autocomplete="off"
        placeholder="Введите номер телефона"
        spellcheck="true"
        required
      />
    </label>
  </div>
</template>

<script>
import AwesomeMask from "awesome-mask";

export default {
  name: "InputInForm",

  directives: {
    mask: AwesomeMask
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

.form {
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
}
._margin-top-7px {
  margin-top: 7px;
}
._margin-top-17px {
  margin-top: 17px;
}
</style>