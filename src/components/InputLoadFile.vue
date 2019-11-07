<template>
  <div class="container">
    <label class="form__label">
      <span class="form__span">Фотография</span>
      <p
        class="form__rem"
      >Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png</p>
      <input class="form__input" type="file" name="file" autocomplete="off" accept=".jpg .png" />
    </label>
  </div>
</template>

<script>
export default {
  name: "InputLoadFile"
};
</script>

<style lang="scss" scoped>
$color-gray: #808080;
$color-white: #ffffff;
$color-text: #475364;
$color-text-placeholder: #8ea4b5;
$color-text-black: #000000;
$color-input-focus: #aeb7bb;
$color-input-background: #f4f9fb;
$color-input-border: #dce5ea;

%subtitle {
  color: $color-text;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
}

%text-span {
  color: $color-text;
  font-size: 11px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
}

%text-input {
  color: $color-text;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
}

%input {
  height: 16px;
  border: 1px solid $color-input-border;
  background: $color-input-background;
  border-radius: 3px;
  padding: 10px;
}

%text-rem {
  color: $color-text-placeholder;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
}

.form {
  &__label {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
  }

  &__span {
    @extend %text-span;
  }

  &__input {
    @extend %text-input;
    @extend %input;
    margin-top: 10px;
  }

  &__input::-webkit-input-placeholder {
    color: $color-text-placeholder;
  }

  &__rem {
    @extend %text-rem;
    margin-top: 10px;
  }
}
</style>