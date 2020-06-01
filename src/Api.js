import axios from "axios";


class ApplicantsApi {
  constructor() {
    this.baseUrl = 'http://localhost:1337/applicants';
    this.fileUrl = 'http://localhost:1337/uploads/a5d81b5953d34bb79a0199f9beae9b06.png';
  }

  async dellFile() {
    // console.log("APIjs method 'removeById' is run. ID = " + id);
    if (confirm("Удалить файл?")) {
      try {
        const response = await axios.delete(`${this.fileUrl}`);
        console.log(response);
        // this.showApplicants();
      } catch (error) {
        console.log(error);
      }
    }
  }

  async removeById(id) {
    // console.log("APIjs method 'removeById' is run. ID = " + id);
    if (confirm("Вы действительно хотите удалить соискателя?")) {
      try {
        const response = await axios.delete(`${this.baseUrl}/${id}`);
        console.log(response);
        return this.showApplicants();
      } catch (error) {
        console.log(error);
      }
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

  async editApplicants(payload, id) {
    const options = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    try {
      const { data } = await axios.put(
        `${this.baseUrl}/${id}`,
        payload,
        options,
      );

      // console.log("APIjs -- editApplicants - data= ", data);
      // console.log("APIjs -- editApplicants - id= " + id);

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