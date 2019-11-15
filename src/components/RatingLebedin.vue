<template>
  <!-- 
Site:
https://www.vuescript.com/star-rating-component-vue-2/
https://github.com/craigh411/vue-star-rating

npm install vue-star-rating
  -->
  <div class="container">
    <star-rating
      star-size="13"
      :show-rating="false"
      :read-only="true"
      :rating="3.0"
      inactive-color="#ffffff"
      active-color="#dae700"
      border-color="#dae700"
      border-width="2"
      padding="0"
    ></star-rating>
    <p class="table__rating-title">
      Средний балл:
      <span class="_black">3.0</span>
    </p>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "RatingLebedin",

  components: {
    StarRating
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

.table__rating-title {
  color: $color-text-light;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  margin: 3px 0 0 0;
}

._black {
  color: $color-text-main;
}
</style>