<template>
  <div class="container">
    <span class="form__span">резюме</span>
    <p
      class="form__rem"
    >Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: pdf, doc</p>
    <label class="form__label" for="fileSummary">
      <p class="form__lable-text">Выберите файл</p>

      <input
        @change="addFileSummary($event.target.files)"
        id="fileSummary"
        class="form__input-file"
        type="file"
        name="fileSummary"
        autocomplete="off"
        accept="application/pdf, application/msword"
      />
    </label>
    <span
      :class="['form__span-file-name', 
      fileSummaryName >= 'Файл не выбран' ? '_color-text-light' : '_color-text']"
    >{{ fileSummaryName }}</span>
  </div>
</template>

<script>
export default {
  name: "InputLoadSummary",

  data: () => ({
    fileSummaryName: "Файл не выбран"
  }),

  methods: {
    addFileSummary(files) {
      this.fileSummaryName = files[0].name;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";

%text-span {
  color: $color-text-main;
  font-size: 11px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
}

.form {
  &__label {
    display: flex;
    position: absolute;
    justify-content: center;

    width: 104px;
    height: 26px;
    border: solid 1px #d4e2e7;

    margin-top: 1px;
    margin-left: 4px;
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

  &__span-file-name {
    display: block;
    width: 600px;
    margin-top: -4px;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    height: 36px;
    border: 1px solid $color-input-border;
    background: $color-input-background;
    border-radius: 3px;
    padding: 12px 10px 8px 120px;
  }
  ._color-text {
    color: $color-text-main;
  }
  ._color-text-light {
    color: $color-text-light;
  }

  &__rem {
    color: $color-text-light;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 3px;
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
.form__lable-text {
  margin: 7px auto;
}
</style>