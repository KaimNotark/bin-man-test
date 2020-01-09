<template>
  <div id="app">
    <div id="wrapper" class="wrapper">
      <header class="header">
        <div class="header-container">
          <img src="../public/images/logo.png" alt class="header-img" />
        </div>
      </header>

      <div class="container-nav-main">
        <nav class="nav">
          <div class="nav-container">
            <svg
              aria-hidden="true"
              style="position: absolute; width: 0; height: 0; overflow: hidden;"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <symbol id="icon-home_w_svg" viewBox="-20 -18 76 76">
                  <title>Домашняя страница</title>
                  <path
                    d="M36 18l-6-6.461v-7.539h-4v4.192l-8-8.192-18 18v2h4v12h10v-10h8v10h10v-12h4v-2z"
                  />
                </symbol>
              </defs>
            </svg>

            <svg class="nav-icon nav-icon__hover">
              <use xlink:href="#icon-home_w_svg" />
            </svg>

            <button class="nav-button _active" type="button">
              <img src="../public/images/clients.png" alt="Клиенты" class="nav-button__img" />
            </button>

            <svg
              aria-hidden="true"
              style="position: absolute; width: 0; height: 0; overflow: hidden;"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <symbol id="icon-reports_w_svg" viewBox="-20 -20 76 76">
                  <title>Отчёты</title>
                  <path
                    d="M34.545 0h0.125c0.437 0 0.781 0.129 1.007 0.38 0.242 0.259 0.344 0.623 0.32 1.092l-0.102 2.241c-0.070 1.496-0.14 2.985-0.203 4.473-0.016 0.348-0.078 0.793-0.414 1.141-0.094 0.097-0.203 0.178-0.328 0.251-0.187 0.105-0.367 0.154-0.547 0.154-0.429 0-0.71-0.291-0.913-0.502l-1.71-1.763-13.114 13.66c-0.367 0.372-0.843 0.582-1.358 0.582s-0.999-0.21-1.358-0.582l-6.019-6.237-6.3 6.528c-0.359 0.372-0.835 0.582-1.351 0.582s-0.999-0.21-1.358-0.582l-0.359-0.372c-0.749-0.776-0.749-2.030 0-2.807l8.018-8.299c0.359-0.372 0.835-0.582 1.351-0.582s0.999 0.21 1.358 0.582l6.019 6.237 11.397-11.889c-0.39-0.396-0.781-0.801-1.163-1.205l-0.554-0.582c-0.219-0.227-0.679-0.704-0.351-1.44 0.062-0.146 0.14-0.267 0.242-0.372 0.32-0.332 0.726-0.348 1.023-0.364 2.217-0.105 4.427-0.218 6.644-0.324zM26 15.58v15.791c0 0.343 0.298 0.629 0.672 0.629h4.656c0.366 0 0.672-0.279 0.672-0.629v-22.063l-6 6.271zM10 31.289c0 0.388 0.298 0.711 0.672 0.711h4.656c0.366 0 0.672-0.315 0.672-0.711v-8.18l-6-6.137v14.317zM18.672 32c-0.374 0-0.672-0.272-0.672-0.598v-7.764c0.237-0.136 0.466-0.233 0.672-0.416l5.328-5.603v13.783c0 0.333-0.305 0.598-0.672 0.598h-4.656zM2 31.285c0 0.39 0.298 0.715 0.672 0.715h4.656c0.366 0 0.672-0.317 0.672-0.715v-12.383l-3.382 3.602c-0.718 0.756-1.354 1.536-2.618 1.536v7.246z"
                  />
                </symbol>
              </defs>
            </svg>

            <svg class="nav-icon nav-icon__hover">
              <use xlink:href="#icon-reports_w_svg" />
            </svg>
          </div>
        </nav>

        <main class="main">
          <!-- modal window form -->
          <div
            id="modal-overlay-form"
            class="modal-overlay-form"
            :class="{ _opened: modalIsOpened }"
          >
            <div modal-overlay-close="modal-overlay" class="modal__overlay">
              <button class="modal-button-close" type="button" @click="modalClose">×</button>
              <FormAdditionApplicant />
            </div>
          </div>
          <!-- / modal window form -->

          <div class="main-header">
            <div class="main-title">
              <h1 class="main-title__title">Ваши соискатели</h1>
              <p class="main-title__counter">Всего соискателей: {{ counterApplicants }}</p>
            </div>

            <div class="main-button">
              <button class="main-button__selected" type="button">
                <img src="../public/images/favorites.png" alt="Избранные" class="main-button__img" />
                <span class="main-button__text">Избранные</span>
              </button>

              <button class="main-button__add" type="button" @click="modalOpen">
                <span class="_increase">+</span>
                <span>Добавить соискателя</span>
              </button>
            </div>
          </div>
          <div class="tables-container">
            <Table />
            <Table />
            <Table />
            <Table />
            <Table />
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Table from "./components/Table.vue";
import FormAdditionApplicant from "./components/FormAdditionApplicant.vue";

export default {
  name: "app",

  components: {
    Table,
    FormAdditionApplicant
  },

  data: function() {
    return {
      counterApplicants: 67,
      modalIsOpened: false
    };
  },

  methods: {
    modalOpen: function() {
      this.modalIsOpened = true;
    },

    modalClose: function() {
      this.modalIsOpened = false;
    }
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
  font-family: $font-family-primary;
  box-sizing: border-box;
}

.wrapper {
  // position: fixed;
  // min-height: 100vh;
  // width: 100vw;
}

#app {
  font-family: $font-family-primary;
}

.container-nav-main {
  // display: flex;
}

.header {
  // position: sticky;
  // top: 0;
  position: fixed;
  width: 100vw;
  height: 76px;
  background-color: $color-input-background;
  z-index: 5;

  &-container {
    height: 66px;
    padding: 15px 27px;
    background-color: $color-header__dark-gray;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  }

  &-img {
    user-select: none;
  }
}

.nav {
  width: 90px;
  background-color: $color-input-background;
  margin-top: -10px;
  position: fixed;
  top: 76px;
  z-index: 6;

  // position: sticky;
  // top: 0;

  &-container {
    min-height: 100vh;
    width: 80px;
    height: 100%;
    padding: 15px;
    border-top: 1px solid $color-text-light;
    background-color: $color-nav__gray;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  }

  &-button {
    width: 50px;
    height: 40px;
    border: 1px solid $color-nav__gray;
    background: none;
    border-radius: 3px;
    transition: border-color 0.3s ease, background-color 0.2s ease;
    cursor: pointer;
    margin-bottom: 12px;
    margin-top: 4px;
    padding-top: 6px;
  }
  &-button:hover {
    border-color: $color-nav__button-blue;
    background-color: $color-nav__button-dark-gray;
  }

  &-icon {
    display: inline-block;
    width: 50px;
    height: 40px;
    stroke-width: 0;
    stroke: currentColor;
    fill: currentColor;

    &__hover {
      font-size: 18px;
      color: $color-white;
      transition: color 0.3s ease, border-color 0.3s ease,
        background-color 0.2s ease;
      border: 1px solid $color-nav__gray;
      border-radius: 3px;
      cursor: pointer;
    }

    &__hover:hover {
      color: $color-nav__button-blue;
      border-color: $color-nav__button-blue;
      background-color: $color-nav__button-dark-gray;
    }
    &__hover:focus {
      outline: none;
      color: $color-nav__button-blue;
      border-color: $color-nav__button-dark-blue;
      background-color: $color-nav__button-dark-gray;
    }
    &__hover:active {
      color: $color-nav__button-dark-blue;
      border-color: $color-nav__button-dark-blue;
      background-color: $color-nav__button-dark-gray;
    }
  }
}
._active {
  background-color: $color-nav__button-dark-gray;
}

.main {
  width: 100%;
  padding: 0px 30px 20px 26px;
  background-color: $color-input-background;
  position: absolute;
  top: 76px;
  left: 83px;

  &-header {
    display: flex;
    justify-content: space-between;
    height: 68px;
    padding-top: 11px;
    background-color: $color-input-background;
    position: sticky;
    top: 77px;
    z-index: 10;
  }

  &-title {
    &__title {
      color: $color-text-main;
      font-size: 22px;
      font-weight: 700;
      line-height: 24px;
    }
    &__counter {
      color: $color-text-light;
      font-size: 11px;
      font-weight: 400;
      line-height: 12px;
      margin: 5px 0 0 0;
    }
  }

  &-button {
    display: flex;
    justify-content: space-between;
    width: 306px;

    &__selected {
      display: flex;
      justify-content: space-around;
      width: 116px;
      height: 36px;
      border: solid 1px $color-button-border;
      border-radius: 3px;
      background: $color-white;
      transition: background-color 0.1s ease, border-color 0.3s ease;
      cursor: pointer;
    }
    &__selected:hover {
      background-color: $color-button-background-gray;
      border-color: $color-gray;
    }
    &__selected:focus {
      outline: none;
      background-color: $color-button-background-gray;
      border-color: $color-text-black;
    }
    &__selected:active {
      background-color: $color-gray;
      border-color: $color-header__dark-gray;
    }

    &__text {
      color: $color-text-main;
      font-size: 11px;
      font-weight: 700;
      line-height: 13px;
      text-transform: uppercase;
      margin-top: 2px;
    }
    &__add {
      display: flex;
      justify-content: space-around;
      width: 181px;
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
      cursor: pointer;
    }

    &__add:hover {
      border-color: #1a56fa;
      background-color: #4d7bf7;
    }
    &__add:focus {
      outline: none;
      border-color: #1a56fa;
      background-color: #4d7bf7;
    }
    &__add:active {
      border-color: #1a56fa;
      background-color: #1a56fa;
      color: $color-nav__button-blue;
    }
  }
}
._increase {
  font-size: 22px;
}

.tables-container {
  // display: block;
  // position: static;
}

// modal overlay form:

.modal-overlay-form {
  visibility: hidden;
  opacity: 0;
  z-index: 900;
  position: absolute;
  width: 1360px;
  height: 1260px;
  margin-top: -21px;
  margin-left: -30px;
  background: rgba(0, 0, 0, 0.5);
  transition: visibility 200ms ease-in, opacity 200ms ease-in;
}

.modal-overlay-form._opened {
  visibility: visible;
  opacity: 1;
  overflow-y: hidden;
}

.modal__overlay {
  display: flex;
  justify-content: flex-end;
}

.modal-button-close {
  display: block;
  width: 30px;
  height: 30px;
  font-size: 25px;
  margin-top: 12px;
  margin-right: 10px;
  background: $color-white;
  border: 1px solid $color-white;
  border-radius: 3px;
  transition: background-color 0.1s ease, border-color 0.3s ease;
  cursor: pointer;
}
.modal-button-close:hover {
  background-color: $color-button-background-gray;
  border-color: $color-text-black;
}
.modal-button-close:focus {
  outline: none;
  background-color: $color-button-background-gray;
  border-color: $color-text-black;
}
.modal-button-close:active {
  background-color: $color-header__dark-gray;
  border-color: $color-input-focus;
  color: $color-input-focus;
}
</style>
