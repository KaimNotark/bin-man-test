<template>
  <div id="app">
    <header class="header">
      <img src="../public/images/logo.png" alt class="header-img" />
    </header>

    <nav class="nav">
      <button class="nav-button" type="button">
        <img src="../public/images/home.png" alt="Домашняя страница" class="nav-button__img" />
      </button>
      <button class="nav-button _active" type="button">
        <img src="../public/images/clients.png" alt="Клиенты" class="nav-button__img" />
      </button>
      <button class="nav-button" type="button">
        <img src="../public/images/reports.png" alt="Отчёты" class="nav-button__img" />
      </button>
    </nav>
    <!-- <FormAdditionApplicant /> -->
    <ButtonsResumeArchiveFavorites />
    <br />
    <hr />
    <br />
    <Applicant />
    <br />
    <hr />
    <br />
    <Phone></Phone>
    <br />
    <hr />
    <br />
    <Mail></Mail>
  </div>
</template>

<script>
// import FormAdditionApplicant from "./components/FormAdditionApplicant.vue";
import ButtonsResumeArchiveFavorites from "./components/ButtonsResumeArchiveFavorites.vue";
import Applicant from "./components/Applicant.vue";
import Phone from "./components/Phone.vue";
import Mail from "./components/Mail.vue";

export default {
  name: "app",

  components: {
    // FormAdditionApplicant,
    ButtonsResumeArchiveFavorites,
    Applicant,
    Phone,
    Mail
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import "./stylesheets/variables.scss";
@import "./stylesheets/resets.scss";

$font-family-primary: "Roboto", "Verdana", "Arial", sans-serif;

html {
  scroll-behavior: smooth;
}

.wrapper *,
.wrapper *::before,
.wrapper *::after {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  max-width: 1440px;
  font-family: $font-family-primary;
  box-sizing: border-box;
}

#app {
  font-family: $font-family-primary;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

.header {
  height: 66px;
  background-color: $color-header;
  padding: 15px;

  &-img {
    user-select: none;
  }
}

.nav {
  width: 80px;
  background-color: $color-nav;
  padding: 15px;

  &-button {
    width: 50px;
    height: 40px;
    border: 1px solid $color-nav;
    background: none;
    border-radius: 3px;
    transition: border-color 0.3s ease, background-color 0.2s ease;
    cursor: pointer;
    margin-bottom: 10px;
    padding-top: 6px;

    &__img {
    }
  }
  &-button:hover {
    border-color: $color-nav__button-blue;
    background-color: $color-nav__button-dark-gray;
  }
}
._active {
  background-color: $color-nav__button-dark-gray;
}
// ._blue {
//   background-color: $color-nav__button-blue;
// }
</style>
