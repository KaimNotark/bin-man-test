<template>
  <div class="container">
    <ul class="buttons-list">
      <li class="buttons-item">
        <button type="button" class="buttons-item__button">
          <img src="../../public/images/resume.jpeg" alt="Резюме" class="buttons-item__picture" />
        </button>
      </li>
      <li class="buttons-item">
        <button type="button" class="buttons-item__button _margin">
          <img src="../../public/images/archive.jpeg" alt="Архив" class="buttons-item__picture" />
        </button>
      </li>
      <li class="buttons-item">
        <button type="button" class="buttons-item__button">
          <img
            src="../../public/images/favorites.jpeg"
            alt="Избранное"
            class="buttons-item__picture"
          />
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ButtonsResumeArchiveFavorites"
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

.container {
  width: 120px;
}

.buttons {
  &-list {
    display: flex;
    justify-content: space-between;
  }

  &-item {
    display: block;

    &__button {
      width: 36px;
      height: 36px;
      border: solid 1px $color-button-border;
      border-radius: 3px;
      background: $color-white;
      transition: background-color 0.1s ease, border-color 0.3s ease;
      cursor: pointer;
    }
    &__button:hover {
      background-color: $color-button-background-gray;
      border-color: $color-gray;
      // transform: scale(1.05);
    }

    &__picture {
    }
  }
}
._margin {
  margin: 0 5px 0 5px;
}
</style>