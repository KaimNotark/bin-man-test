<template>
  <!-- 
Site:
https://www.vuescript.com/star-rating-component-vue-2/
https://github.com/craigh411/vue-star-rating

npm install vue-star-rating
  -->
  <div class="form__rating-container">
    <p class="form__rating-title">{{ rating.title }}</p>
    <star-rating
      :star-size="13"
      :show-rating="false"
      inactive-color="#ffffff"
      :active-color="colorStar"
      :border-color="colorStar"
      :border-width="2"
      :padding="0"
      :rating="ratingValue"
      @rating-selected="setRating"
    ></star-rating>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "RatingInForm",

  components: {
    StarRating
  },

  props: {
    rating: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      selected: 0,
      isFiveStars: true,
      colorStar: "#ff5d00",
      ratingValue: 0
    };
  },

  methods: {
    onReset() {
      // console.log("RATING -- onReset - RUN");
      this.ratingValue = 0;
      this.colorStar = "#ff5d00";
      // console.log("RATING -- onReset - this.ratingValue = " + this.ratingValue);
    },

    setRating(selected) {
      if (selected == 1) { this.colorStar = "#ff5d00"; this.ratingValue = 1 }
      if (selected == 2) { this.colorStar = "#ffa800"; this.ratingValue = 2 }
      if (selected == 3) { this.colorStar = "#dae700"; this.ratingValue = 3 }
      if (selected == 4) { this.colorStar = "#abd02d"; this.ratingValue = 4 }
      if (selected == 5) { this.colorStar = "#67c600"; this.ratingValue = 5 }

      this.$emit("raitingNumber", selected);
      this.$emit("raitingIndex");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";

.form__rating-container {
  display: flex;
  flex-direction: column;
}

.form__rating-title {
  color: $color-text-main;
  margin-bottom: 4px;
  font-size: 11px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
}
</style>