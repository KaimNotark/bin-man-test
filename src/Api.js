import axios from "axios";


class ApplicantsApi {
  constructor() {
    this.baseUrl = 'http://localhost:1337/applicants'
  }

  async removeById(id) {
    // console.log("APIjs method 'removeById' is run. ID = " + id);
    if (confirm("Вы действительно хотите удалить соискателя?")) {
      try {
        const response = await axios.delete(`${this.baseUrl}/${id}`);
        console.log(response);
        // this.showApplicants();
      } catch (error) {
        console.log(error);
      }
    }
  }

  async getById(id) {
    // console.log("APIjs -- getById - run.");

    try {
      const { data } = await axios.get(`${this.baseUrl}/${id}`);
      // console.log("APIjs -- getById - data = ", data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addApplicants(payload) {
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    try {
      const { data } = await axios.post(
        this.baseUrl,
        payload,
        options,
      );

      console.log("addApplicants:", data);

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async showApplicants() {
    console.log("CLASS Function SHOW ALL APPLICANTS run.");

    try {
      const {
        data
      } = await axios.get(this.baseUrl);
      // console.log("CLASS allApplicants -- ", data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getApplicants() {
    return Promise.resolve(this.applicants);
  }
}

export const Applicants = new ApplicantsApi();