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
          accept=".jpg .png"
          required
        />
      </label>

      <hr class="form-devider" />
      <h2 class="form-subtitle">Контактные данные</h2>

      <label class="form__label">
        <span class="form__span">Номер телефона</span>
        <input
          class="form__input"
          type="tel"
          name="phone"
          maxlength="11"
          pattern="2[0-9]{3}-[0-9]{3}"
          autocomplete="off"
          placeholder="Введите номер телефона"
          spellcheck="true"
          required
        />
        <input
          type="button"
          class="form__input-btn"
          value="Добавить еще один номер телефона"
          onclick="msg()"
        />
      </label>

      <label class="form__label">
        <span class="form__span">Номер телефона</span>
        <input
          class="form__input"
          type="email"
          name="email"
          autocomplete="on"
          placeholder="Введите E-mail"
          required
        />
        <input
          type="button"
          class="form__input-btn"
          value="Добавить еще один e-mail"
          onclick="msg()"
        />
      </label>

      <hr class="form-devider" />
      <h2 class="form-subtitle">Резюме и результаты тестового задания</h2>

      <label class="form__label">
        <span class="form__span">резюме</span>
        <p
          class="form__rem"
        >Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: pdf, doc</p>
        <input
          class="form__input"
          type="file"
          name="file"
          autocomplete="on"
          spellcheck="true"
          accept=".pdf .doc .docx"
          required
        />
      </label>

      <label class="form__label">
        <span class="form__span">Архив с результатами тестового задания</span>
        <p
          class="form__rem"
        >Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: zip, rar</p>
        <input
          class="form__input"
          type="file"
          name="file"
          autocomplete="on"
          spellcheck="true"
          accept=".zip .rar"
          required
        />
      </label>

      <hr class="form-devider" />
      <h2 class="form-subtitle">Оценка соискателя</h2>

      <div class="container-row">
        <!-- add list with stars use v-for probably -->
      </div>

      <hr class="form-devider" />

      <div class="container-row">
        <input type="reset" class="form__input-btn-reset" value="Отменить" />
        <input
          type="submit"
          class="form__input-btn-submit"
          value="Добавить соискателя"
          onclick="msg()"
        />
      </div>
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

%select {
  height: 38px;
  border: 1px solid $color-input-border;
  background: $color-input-background;
  border-radius: 3px;
  padding: 10px;
}

%option {
  color: $color-text;
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

%btn-reset {
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
}

%btn-submit {
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

.container-row {
  display: flex;
  justify-content: space-between;
}

.form {
  width: 600px;
  height: 1000px;
  border: 1px solid $color-gray;
  background-color: $color-white;
  padding: 25px;

  &-devider {
    margin-top: 25px;
    width: 650px;
    border: none;
    color: green; /* $color-input-background */
    background-color: green;
    height: 3px;
    margin-left: -25px;
  }

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

  &__input-btn-reset {
    @extend %btn-reset;
  }
  &__input-btn-submit {
    @extend %btn-submit;
  }

  &__input-btn-reset:hover {
    border-color: $color-input-focus;
    background-color: #e4f0f5;
  }

  &__input-btn-submit:hover {
    border-color: #1a56fa;
    background-color: #4d7bf7;
  }
}
</style>