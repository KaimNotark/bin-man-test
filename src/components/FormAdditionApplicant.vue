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

      <label class="form__label">
        <span class="form__span">Вакансия</span>
        <select class="form__select _light" required>
          <option value="0" class="form__option">Выберите вакансию</option>
          <option value="JFD" class="form__option">Junior Frontend Developer</option>
          <option value="MFD" class="form__option">Middle Frontend Developer</option>
          <option value="SFD" class="form__option">Senior Frontend Developer</option>
          <option value="TFD" class="form__option">TeamLead Frontend Developer</option>
        </select>
      </label>

      <label class="form__label">
        <span class="form__span">Фотография</span>
        <p
          class="form__rem"
        >Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png</p>
        <input
          class="form__input"
          type="file"
          name="file"
          autocomplete="on"
          spellcheck="true"
          required
        />
      </label>
      <hr class="form-devider" />
      <h2 class="form-subtitle">Контактные данные</h2>

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
$color-text-placeholder: #8ea4b5;
$color-text-black: #000000;
$color-input-focus: #aeb7bb;
$color-input-background: #f4f9fb;
$color-input-border: #dce5ea;

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
  color: $color-text-black;
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

%select {
  height: 38px;
  border: 1px solid $color-input-border;
  background: $color-input-background;
  border-radius: 3px;
  padding: 10px;
}

%option {
  color: $color-text-black;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
}

%text-rem {
  color: $color-text-placeholder;
  font-size: 10px;
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

.form {
  width: 650px;
  height: 1000px;
  border: 1px solid $color-gray;
  background-color: $color-white;
  padding: 25px;

  &-title {
    @extend %title;
  }

  &-subtitle {
    @extend %subtitle;
  }

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

  &__select {
    @extend %select;
    margin-top: 10px;
    @extend %option;
  }

  &__option {
    @extend %option;
  }

  ._light {
    color: $color-text-placeholder;
  }

  &__rem {
    @extend %text-rem;
    margin-top: 10px;
  }
}
</style>