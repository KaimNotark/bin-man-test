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
      :rating="2.0"
      inactive-color="#ffffff"
      active-color="#ffa800"
      border-color="#ffa800"
      border-width="2"
      padding="0"
    ></star-rating>
    <p class="table__rating-title">
      Средний балл:
      <span class="_black">2.0</span>
    </p>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "RatingChulkov",

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