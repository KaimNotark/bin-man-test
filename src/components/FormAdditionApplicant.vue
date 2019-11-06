<template>
  <div class="container">
    <form class="form" id="formId" autocomplete="on">
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
        />
      </label>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormAdditionApplicant"
};
</script>

<style lang="scss" scoped>
$color-gray: #808080;
$color-white: #ffffff;
$color-text: #475364;
$color-text-input: #8ea4b5;

%title {
  color: $color-text;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
}

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
  color: $color-text-input;
  font-family: Roboto;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

.container {
}

.form {
  width: 650px;
  height: 1000px;
  border: 1px solid $color-gray;
  background-color: $color-white;

  &-title {
    @extend %title;
  }

  &-subtitle {
    @extend %subtitle;
  }

  &__label {
  }

  &__span {
    @extend %text-span;
  }

  &__input {
    @extend %text-input;
  }
}
</style>