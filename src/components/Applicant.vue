<template>
  <div class="container">
    <img src="/images/binman.png" alt="Аватар" class="applicant-img" />
    <div class="applicant-text">
      <p class="applicant-text__name">Бинман Иван Натанович</p>
      <p class="applicant-text__vacancy">Вакансия: Full-stack разработчик</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Applicant"
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

.container {
  display: flex;
  justify-content: flex-start;
  width: 250px;
}

.applicant {
  &-img {
    width: 40px;
    height: 40px;
  }
  &-text {
    margin-left: 10px;

    &__name {
      color: $color-text-main;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      margin-top: 5px;
      margin-bottom: 3px;
    }
    &__vacancy {
      color: $color-text-light;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      margin-top: 5px;
      margin-bottom: 3px;
    }
  }
}
</style>