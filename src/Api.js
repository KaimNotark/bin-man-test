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

  async addApplicants(addOneApplicant) {
    // console.log("APIjs method ADD APPLICANT run.");

    try {
      await axios.post(this.baseUrl, addOneApplicant 
      //   {
      //   headers: {
      //     'Content-Type': 'multipart/form-data'
      //   }
      // }
      );
      console.log("APIjs axios.post -- " + addOneApplicant);
    } catch (error) {
      console.log(error);
      throw error;
    }

    // .then(response => {
    //   console.log(response);
    // })
    // .catch(error => console.log(error));
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