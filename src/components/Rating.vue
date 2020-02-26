<template>
  <div class="container">
    <star-rating
      :star-size="13"
      :border-width="2"
      :padding="0"
      :rating="ratingValue"
      inactive-color="#ffffff"
      :active-color="ratingColor"
      :border-color="ratingColor"
      :show-rating="false"
      read-only
    />
    <p class="table__rating-title">
      Средний балл:
      <span class="_black">{{ ratingValue }}</span>
    </p>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "Rating",

  components: {
    StarRating
  },

  props: {
    ratingColor: {
      type: String,
      required: true
    },

    ratingValue: {
      type: Number,
      required: true
    }
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