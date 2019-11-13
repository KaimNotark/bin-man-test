<template>
  <div id="app">
    <header class="header">
      <img src="../public/images/logo.png" alt class="header-img" />
    </header>
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
  width: 1440px;
  height: 66px;
  background: $color-header;
  padding: 15px;

  &-img {
    user-select: none;
  }
}
</style>
