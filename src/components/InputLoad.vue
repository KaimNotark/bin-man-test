<template>
  <div class="container">
    <span class="form__load-header">{{ loadHeader }}</span>
    <p class="form__load-rem">{{ loadRem }}</p>
    <label class="form__label" :for="loadId">
      <p class="form__lable-text">Выберите файл</p>

      <input
        @change="addFilePhoto($event.target.files)"
        :id="loadId"
        class="form__input-file"
        type="file"
        name="filePhoto"
        autocomplete="off"
        accept="image/jpeg, image/png"
      />
      <!--       
        accept="application/pdf, application/msword"
        accept="application/zip, application/rar" 
      -->
    </label>
    <span
      :class="['form__span-file-name', 
      filePhotoName >= 'Файл не выбран' ? '_color-text-light' : '_color-text']"
    >{{ filePhotoName }}</span>
  </div>
</template>

<script>
export default {
  name: "InputLoad",

  data: () => ({
    filePhotoName: "Файл не выбран"
  }),

  methods: {
    addFilePhoto(files) {
      this.filePhotoName = files[0].name;
    }
  },

  props: {
    loadHeader: {
      type: String,
      required: true
    },

    loadRem: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";

%text-span {
  color: $color-text-main;
  font-size: 11px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
}

.form {
  &__label {
    display: flex;
    position: absolute;
    justify-content: center;

    width: 104px;
    height: 26px;
    border: solid 1px #d4e2e7;

    margin-top: 1px;
    margin-left: 4px;
    cursor: pointer;

    background: #386bf2;
    border-radius: 3px;
    color: #ffffff;
    font-size: 10px;
    font-weight: 700;
    line-height: 10px;
    text-transform: uppercase;
    transition: background-color 0.1s ease, border-color 0.3s ease;
  }
  &__label:hover {
    border-color: #1a56fa;
    background-color: #4d7bf7;
  }

  &__load-header {
    @extend %text-span;
  }

  &__span-file-name {
    display: block;
    width: 600px;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    height: 36px;
    border: 1px solid $color-input-border;
    background: $color-input-background;
    border-radius: 3px;
    padding: 12px 10px 8px 120px;
    margin-top: -4px;
  }
  ._color-text {
    color: $color-text-main;
  }
  ._color-text-light {
    color: $color-text-light;
  }

  &__load-rem {
    color: $color-text-light;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 3px;
  }

  &__input-file {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
}
.form__lable-text {
  margin: 7px auto;
}
</style>