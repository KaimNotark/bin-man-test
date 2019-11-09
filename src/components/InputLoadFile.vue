<template>
  <div class="container">
    <span class="form__span">Фотография</span>
    <p
      class="form__rem"
    >Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png</p>
    <label class="form__label" for="file">
      <p class="form__lable-text">Выберите файл</p>

      <input
        @change="addFilePhoto($event.target.files)"
        id="file"
        class="form__input-file"
        type="file"
        name="file"
        autocomplete="off"
        accept=".jpg .png"
      />
    </label>
    <input
      class="form__input-text"
      type="text"
      name="name"
      placeholder="Файл не выбран"
      disabled
      :value="inputValue"
    />
    <!-- <span>inputValue = "{{ inputValue }}"</span> -->
  </div>
</template>

<script>
export default {
  name: "InputLoadFile",

  data: () => ({
    inputValue: ""
  }),

  methods: {
    addFilePhoto(files) {
      let fileName = files[0].name;
      this.inputValue = fileName;
      console.log("fileName - " + fileName);
      console.log("inputValue - " + this.inputValue);
    }
  }
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

.form {
  &__label {
    display: flex;
    position: absolute;
    // flex-direction: column;
    justify-content: center;

    width: 104px;
    height: 26px;
    border: solid 1px #d4e2e7;

    margin-top: 5px;
    margin-left: 7px;
    // z-index: 3;
    cursor: pointer;

    background: #386bf2;
    border-radius: 3px;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    line-height: 10px;
    text-transform: uppercase;
    transition: background-color 0.1s ease, border-color 0.3s ease;
  }
  &__label:hover {
    border-color: #1a56fa;
    background-color: #4d7bf7;
  }

  &__span {
    @extend %text-span;
  }

  &__input-text {
    width: 470px;
    color: $color-text;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    height: 16px;
    border: 1px solid $color-input-border;
    background: $color-input-background;
    border-radius: 3px;
    padding: 10px 10px 10px 120px;
  }

  &__input-text::-webkit-input-placeholder {
    color: $color-text-placeholder;
  }

  &__rem {
    color: $color-text-placeholder;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 10px;
  }

  &__input-file {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
}
</style>