<template>
  <div class="form__load-container">
    <span class="form__load-header">{{ variants[acceptType].header }}</span>
    <p class="form__load-comment">{{ variants[acceptType].comment }}</p>
    <label class="form__label" :for="loadId">
      <p class="form__lable-text">Выберите файл</p>

      <input
        @change="addFile($event.target.files)"
        :id="loadId"
        ref="fileUpload"
        type="file"
        name="fileName"
        autocomplete="off"
        class="form__input-file"
      />
    </label>
    <span
      :class="['form__file-name', 
      {'_color-text-light' : !isFileInInput}, 
      { '_color-text' : isFileInInput } 
      ]"
    >{{ fileName }}</span>
  </div>
</template>

<script>
export default {
  name: "InputLoad",

  props: {
    allApplicants: {
      type: Array,
      required: true
    },

    loadId: {
      type: String,
      required: true
    },

    acceptType: {
      type: String,
      required: true
    }
  },

  data: () => ({
    fileName: "Файл не выбран",

    isFileInInput: false,
    isFilePhotoInCard: false,
    isFileSummaryInCard: false,
    isFileTestInCard: false,

    fileSize: 0,
    file: null,
    sizeOfFile: 0
  }),

  computed: {
    variants() {
      return {
        photo: {
          header: "Фотография",
          comment:
            "Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png",
          size: 5242881, // byte
          accept: "image/jpeg, image/png"
        },
        summary: {
          header: "резюме",
          comment:
            "Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: pdf, doc",
          size: 52428801, // byte
          accept: "image/jpeg, image/png"
        },
        test: {
          header: "Архив с результатами тестового задания",
          comment:
            "Размер файла вложения не должен превышать 50 Мб, для загрузки допустимы следующие форматы файлов: zip, rar",
          size: 52428801, // byte
          accept: "image/jpeg, image/png"
        }
      };
    }
  },

  methods: {
    onEditPhoto(index) {
      // console.log("INPUT-LOAD -- onEditPhoto - RUN, index= " + index);
      this.isFilePhotoInCard =
        this.allApplicants[index].photo.url !==
        "https://via.placeholder.com/40x40/e8eff1/282e37?text=A";

      if (this.isFilePhotoInCard) {
        this.isFileInInput = true;
        this.fileName = this.allApplicants[index].photo.name;
      } else {
        this.isFileInInput = false;
        this.fileName = "Файл отсутствует";
      }
    },
    onEditSummary(index) {
      // console.log("INPUT-LOAD -- onEditSummary - RUN, index= " + index);
      this.isFileSummaryInCard = this.allApplicants[index].summary !== null;

      if (this.isFileSummaryInCard) {
        this.isFileInInput = true;
        this.fileName = this.allApplicants[index].summary.name;
      } else {
        this.isFileInInput = false;
        this.fileName = "Файл отсутствует";
      }
    },
    onEditTest(index) {
      // console.log("INPUT-LOAD -- onEditTest - RUN, index= " + index);
      this.isFileTestInCard = this.allApplicants[index].test !== null;

      if (this.isFileTestInCard) {
        this.isFileInInput = true;
        this.fileName = this.allApplicants[index].test.name;
      } else {
        this.isFileInInput = false;
        this.fileName = "Файл отсутствует";
      }
    },

    onReset() {
      this.fileName = "Файл не выбран";
      this.isFileInInput = false;
      this.file = null;
      this.fileSize = 0;
      this.sizeOfFile = 0;

      if (this.acceptType === "photo") {
        this.$emit("addFilePhoto", this.file);
      }
      if (this.acceptType === "summary") {
        this.$emit("addFileSummary", this.file);
      }
      if (this.acceptType === "test") {
        this.$emit("addFileTest", this.file);
      }
    },

    addFile(files) {
      this.file = files[0];

      this.fileName = files[0].name;
      this.sizeOfFile = this.variants[this.acceptType].size;

      this.isFileInInput = files.length > 0;

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
        alert("Файл '" + this.fileName + "' слишком большой.");
        this.fileName = "Файл не выбран";
        this.isFileInInput = false;
      } else {
        if (this.acceptType === "photo") {
          // console.log("change file photo -- this.file.name - " + this.file.name);
          // console.log("change file photo -- this.file.type - " + this.file.type);
          if (
            this.file.type !== "image/png" &&
            this.file.type !== "image/jpeg"
          ) {
            alert(
              "Файл '" +
                this.fileName +
                "' не верного формата. Нужен файл 'jpg' или 'png'."
            );
            this.fileName = "Файл не выбран";
            this.isFileInInput = false;
          } else {
            this.$emit("addFilePhoto", this.file);
          }
        }

        if (this.acceptType === "summary") {
          if (
            this.getFileExtension(this.file.name) !== "doc" &&
            this.getFileExtension(this.file.name) !== "docx" &&
            this.getFileExtension(this.file.name) !== "pdf"
          ) {
            alert(
              "Файл '" +
                this.fileName +
                "' не верного формата. Нужен файл 'doc' или 'pdf'."
            );
            this.fileName = "Файл не выбран";
            this.isFileInInput = false;
          } else {
            this.$emit("addFileSummary", this.file);
          }
        }

        if (this.acceptType === "test") {
          if (
            this.getFileExtension(this.file.name) !== "zip" &&
            this.getFileExtension(this.file.name) !== "rar"
          ) {
            alert(
              "Файл '" +
                this.fileName +
                "' не верного формата. Нужен файл 'zip' или 'rar'."
            );
            this.fileName = "Файл не выбран";
            this.isFileInInput = false;
          } else {
            this.$emit("addFileTest", this.file);
          }
        }
      }
    },

    getFileExtension(fileName) {
      return fileName.split(".").splice(-1, 1)[0];
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
  &__load-container {
    margin-top: 16px;
  }

  &__label {
    display: block;
    position: relative;
    justify-content: center;
    width: 104px;
    height: 26px;
    border: solid 1px #d4e2e7;
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
    margin-top: -31px;
  }
  ._color-text {
    color: $color-text-main;
  }
  ._color-text-light {
    color: $color-text-light;
  }

  &__load-comment {
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
  margin: 7px 7px 7px 10px;
}
</style>