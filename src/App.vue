<template>
  <div id="app">
    <FormAdditionApplicant />
  </div>
</template>

<script>
import FormAdditionApplicant from './components/FormAdditionApplicant.vue'

export default {
  name: 'app',

  components: {
    FormAdditionApplicant
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

$font-family-primary: 'Roboto', "Verdana", "Arial", sans-serif;

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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
