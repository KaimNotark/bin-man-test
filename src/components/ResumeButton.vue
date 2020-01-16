<template>
  <div class="container">
    <li class="buttons-item">
      <button type="button" class="buttons-item__button">
        <img :src="button.buttonImg" :alt="button.buttonInfo" class="buttons-item__picture" />
      </button>
    </li>
  </div>
</template>

<script>
export default {
  name: "ResumeButton",

  props: {
    button: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

.buttons {
  &-item {
    display: block;

    &__button {
      width: 36px;
      height: 36px;
      padding-top: 4px;
      border: solid 1px $color-button-border;
      border-radius: 3px;
      background: $color-white;
      transition: background-color 0.1s ease, border-color 0.3s ease;
      cursor: pointer;
    }
    &__button:hover {
      background-color: $color-button-background-gray;
      border-color: $color-gray;
    }
    &__button:focus {
      outline: none;
      background-color: $color-button-background-gray;
      border-color: $color-text-black;
    }
    &__button:active {
      background-color: $color-gray;
      border-color: $color-header__dark-gray;
    }
  }
}
</style>