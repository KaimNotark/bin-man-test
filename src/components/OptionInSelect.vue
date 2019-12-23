<template>
  <option :value="option.value" class="form__option">{{ option.content }}</option>
</template>

<script>
export default {
  name: "OptionInSelect",

  props: {
    option: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

%option {
  color: $color-text-main;
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
}

.form__option {
  @extend %option;
}
</style>