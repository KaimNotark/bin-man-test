<template>
  <div class="container">
    <div class="mail-border">
      <img src="../../public/images/mail.png" alt="E-mail" class="mail-border__img" />
    </div>
    <div class="mail-text">
      <p class="mail-text__e-mail">ioan@binman.ru</p>
      <button type="button" class="mail-text__button">Показать еще 1 e-mail</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mail"
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

.container {
  display: flex;
  justify-content: flex-start;
  width: 150px;
}

.mail {
  &-border {
    width: 36px;
    height: 36px;
    border-radius: 3px;
    background: $color-button-background-gray;

    &__img {
      display: block;
      margin: 12px auto;
    }
  }
  &-text {
    margin-left: 10px;

    &__e-mail {
      color: $color-text-main;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0.3px;
      margin-top: 2px;
      margin-bottom: 3px;
    }
    &__button {
      color: $color-text-light;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      border-top: none;
      border-left: none;
      border-bottom: solid 1px $color-white;
      border-right: none;
      background-color: $color-white;
      transition: background-color 0.1s ease, color 0.3s ease;
      cursor: pointer;
      padding: 0;
      margin-top: 5px;
      margin-bottom: 3px;
    }
    &__button:hover {
      color: $color-text-main;
      border-bottom: solid 1px $color-text-main;
    }
  }
}
</style>