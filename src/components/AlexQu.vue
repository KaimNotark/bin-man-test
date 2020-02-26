<template>
  <div>
    <form @submit.prevent="uploadFiles" id="uploadForm" name="uploadForm">
      <input type="file" id="file" required accept="image/*" />
      <br />
      <input v-model="name" type="text" />
      <br />
      <button type="submit">uploadFiles</button>
    </form>
    {{ errors }}
  </div>
</template>

<script>
export default {
  // this is code of loading files from form to Strapi API

  // --------- src/Api.js ---------
  async create(payload) {
    const options = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    try {
      const { data } = await axios.post(this.baseUrl, payload, options);
      console.log("addApplicants:", data);
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  // --------- src/App.vue ---------
  data() {
    return {
      file: "",
      name: "",
      errors: null
    };
  },

  methods: {
    async uploadFiles({ target }) {

      const { name } = this;
      const payload = new FormData();
      const image = target.querySelector("input[type=file]").files[0];

      payload.append("files.photo", image);
      payload.append("data", JSON.stringify({ name }));
      
      try {
        const result = await Applicants.create(payload);
        console.log(result);
      } catch (error) {
        this.errors = error;
      }
    }
  }
};
</script>