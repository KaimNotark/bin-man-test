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
    },
    allApplicants: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      selected: 0,
      isFiveStars: true,
      colorStar: "#ff5d00",
      ratingValue: 0,
      selectedRating: 0
    };
  },

  methods: {
    setColorStar(key) {
      switch (key) {
        case 1:
          this.colorStar = "#ff5d00";
          break;
        case 2:
          this.colorStar = "#ffa800";
          break;
        case 3:
          this.colorStar = "#dae700";
          break;
        case 4:
          this.colorStar = "#abd02d";
          break;
        case 5:
          this.colorStar = "#67c600";
          break;
      }
    },

    // слушал лекцию по clean code и там сказали, что switch вообще нельзя 
    // применять, т.к. забывают ставить break + ряд других причин...
    // рекомендовали использовать вместо него if
    // я решил оставить switch, т.к. здесь слишком простые методы 
    // и ошибиться сложно

    setRatingValue(key) {
      switch (key) {
        case 1:
          this.ratingValue = 1;
          break;
        case 2:
          this.ratingValue = 2;
          break;
        case 3:
          this.ratingValue = 3;
          break;
        case 4:
          this.ratingValue = 4;
          break;
        case 5:
          this.ratingValue = 5;
          break;
      }
    },

    editSummary(index) {
      this.ratingValue = this.allApplicants[index].ratingSummary;
      this.setColorStar(this.ratingValue);
    },
    editTest(index) {
      this.ratingValue = this.allApplicants[index].ratingTest;
      this.setColorStar(this.ratingValue);
    },
    editInterview(index) {
      this.ratingValue = this.allApplicants[index].ratingInterview;
      this.setColorStar(this.ratingValue);
    },

    onReset() {
      this.ratingValue = 0;
      this.colorStar = "#ff5d00";
      this.selectedRating = 0;

      this.$emit("raitingNumber", this.selectedRating);
      this.$emit("raitingIndex");
    },

    setRating(selected) {
      this.selectedRating = selected;

      this.setColorStar(selected);
      this.setRatingValue(selected);

      this.$emit("raitingNumber", this.selectedRating);
      this.$emit("raitingIndex");

      selected = 0;
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