<template>
  <div class="container">
    <span class="form__load-header">{{ variants[acceptType].header }}</span>
    <p class="form__load-rem">{{ loadRem }}</p>
    <label class="form__label" :for="loadId">
      <p class="form__lable-text">Выберите файл</p>

      <input
        @change="addFile($event.target.files)"
        :id="loadId"
        class="form__input-file"
        type="file"
        name="fileName"
        autocomplete="off"
        :accept="typeOfFiles"
      />
    </label>
    <span
      :class="['form__file-name', '_color-text-light', { file: '_color-text' }]"
    >{{ fileName }}</span>
  </div>
</template>

<script>

export default {
  name: "InputLoad",

  props: {
    loadId: {
      type: String,
      required: true
    },

    acceptType: {
      type: String,
      required: true
    },
  },

  data: () => ({
    fileName: "Файл не выбран",
    isFileInInput: false,
    fileSize: 0,
    file: null,
  }),

  computed: {
    variants () {
      return {
        photo: {
          header: "Фотография",
          comment: "Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png",
          size: 5242881,
          accept: "image/jpeg, image/png",
        },
        resume: {
          loadHeaderPhoto: "Фотография",
          loadRemPhoto: "Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png",
          sizeOfFilePhoto: 5242881,
          typeOfFilesPhoto: "image/jpeg, image/png",

          loadHeaderSummary: "резюме",
          loadRemSummary: "Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: pdf, doc",
          sizeOfFileSummary: 52428801,
          typeOfFilesSummary: "application/pdf, application/msword",

          loadHeaderTest: "Архив с результатами тестового задания",
          loadRemTest: "Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: zip, rar",
          sizeOfFileTest: 52428801,
          typeOfFilesTest: "application/zip, application/rar",
        }
      }
    }
  },

  methods: {
    addFile (files) {
      this.file = files[0];

      // files.length > 0
      //   ? (this.isFileInInput = true)
      //   : (this.isFileInInput = false);

      // if (files.length > 0) {
      //   this.isFileInInput = true;
      // } else {
      //   this.isFileInInput = false;
      // }

      this.fileSize = files[0].size;
      if (this.fileSize > this.sizeOfFile) {
        alert("Файл '" + this.filePhotoName + "' слишком большой.");
        this.filePhotoName = "Файл не выбран";
        this.isFileInInput = false;
      }

      console.log("Имя - " + files[0].name);
      console.log("Размер - " + files[0].size + " байт");
      console.log("Тип - " + files[0].type);
      console.log("Длина - " + files.length);
      console.log("isFileInInput - " + this.isFileInInput);
      console.log("fileSize - " + this.fileSize);
      console.log("sizeOfFile - " + this.sizeOfFile);
    }
  },
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
  &__label:active {
    border-color: #1a56fa;
    background-color: #1a56fa;
    color: $color-nav__button-blue;
  }

  &__load-header {
    @extend %text-span;
  }

  &__file-name {
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