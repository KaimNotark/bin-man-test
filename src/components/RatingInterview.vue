<template>
  <!-- 
Site:
https://www.vuescript.com/star-rating-component-vue-2/
https://github.com/craigh411/vue-star-rating

npm install vue-star-rating
  -->
  <div class="container">
    <p class="form__rating-title">Оценка собеседования</p>
    <star-rating
      star-size="13"
      :show-rating="false"
      inactive-color="#ffffff"
      active-color="#ff5d00"
      border-color="#ff5d00"
      border-width="2"
      padding="0"
    ></star-rating>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "RatingInterview",

  components: {
    StarRating
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";

.form__rating-title {
  color: $color-text-main;
  margin-bottom: 4px;
  font-size: 11px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
}

</style>