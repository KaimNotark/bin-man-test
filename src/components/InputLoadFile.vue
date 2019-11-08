<template>
  <div class="container">
    <span class="form__span">Фотография</span>
    <p
      class="form__rem"
    >Размер файла вложения не должен превышать 5 Мб, для загрузки допустимы следующие форматы файлов: jpg, png</p>
    <label class="form__label" for="file">
      <p class="form__lable-text">Выберите файл</p>
      <!-- <button @click="addFilePhotoBtn()" class="form__input-btn" type="button">Выберите файл</button> -->

      <input
        class="form__input-file"
        type="file"
        id="file"
        name="file"
        autocomplete="off"
        accept=".jpg .png"
      />
    </label>
    <input class="form__input-text" type="text" name="name" placeholder="Файл не выбран" disabled />

    <!-- Alex 
    <label
      v-if="CreateTask.attached.length < 4"
      key="label"
      for="attachFile"
      class="attached-item _label"
    >
      <input
        @change="filler($event.target.files)"
        id="attachFile"
        type="file"
        multiple
        accept="image"
        name="attachFile"
        class="attached-item__input"
      />
      <span>+</span>
      <button
        @click="addSpecialization(specKeyword)"
        class="specialization-label__label-button"
        type="button"
        name="addSpecKeyword"
        aria-label="Добавить специализацию"
      >+</button>
    </label>
    / Alex-->

    <!-- <label class="file-select">
      <div class="select-button">
        <span v-if="value">Selected File: {{value.name}}</span>
        <span v-else>Select File</span>
      </div>
      <input type="file" @change="handleFileChange" />
    </label>-->
  </div>
</template>

<script>
export default {
  name: "InputLoadFile",

  props: {
    value: File
  },

  data() {
    return {
      file: ""
    };
  },

  methods: {
    // addFilePhotoInp() {
    //   this.file = this.$refs.file.files[0];
    // },

    addFilePhotoBtn() {
      alert("button was pressed !" + this.file);
    }
    // console.log( "button was pressed !")
    // this.file = this.$refs.file.files[0];

    // Alex
    // addSpecialization(specKeyword) {
    //   if (specKeyword) {
    //     this.$store.dispatch("addSpecialization", specKeyword);
    //     this.specKeyword = "";
    //   }
    // },
    // filler(files) {
    //   const formData = new FormData();
    //   for (let file of files) {
    //     formData.append("image", file);
    //   }
    //   this.$http
    //     .post("upload", formData)
    //     .then(({ body }) => {
    //       body.forEach(picture =>
    //         this.$store.dispatch("addAttached", picture._id)
    //       );
    //     })
    //     .catch(err => console.error(err));
    // }
    // / Alex
    // handleFileChange(e) {
    //   this.$emit("input", e.target.files[0]);
    // }
  }
};
// https://medium.com/@frontman/%D1%81%D1%82%D0%B8%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B8-%D0%BA%D0%B0%D1%81%D1%82%D0%BE%D0%BC%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-file-inputs-dea8e2de3ebc
</script>
<style lang="scss" scoped>
// .file-select > .select-button {
//   padding: 1rem;

//   color: white;
//   background-color: #2ea169;

//   border-radius: 0.3rem;

//   text-align: center;
//   font-weight: bold;
// }

// .file-select > input[type="file"] {
//   display: none;
// }

$color-gray: #808080;
$color-white: #ffffff;
$color-text: #475364;
$color-text-placeholder: #8ea4b5;
$color-text-black: #000000;
$color-input-focus: #aeb7bb;
$color-input-background: #f4f9fb;
$color-input-border: #dce5ea;

%subtitle {
  color: $color-text;
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-transform: uppercase;
}

%text-span {
  color: $color-text;
  font-size: 11px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
}

.form {
  &__label {
    display: flex;
    position: absolute;
    // flex-direction: column;
    justify-content: center;

    width: 104px;
    height: 26px;
    border: solid 1px #d4e2e7;

    margin-top: 5px;
    margin-left: 7px;
    // z-index: 3;
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

  &__span {
    @extend %text-span;
  }

  &__input-text {
    width: 470px;
    color: $color-text;
    font-size: 12px;
    font-weight: 400;
    line-height: 12px;
    height: 16px;
    border: 1px solid $color-input-border;
    background: $color-input-background;
    border-radius: 3px;
    padding: 10px 10px 10px 120px;
  }

  &__input-text::-webkit-input-placeholder {
    color: $color-text-placeholder;
  }

  &__rem {
    color: $color-text-placeholder;
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    margin-top: 10px;
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
</style>