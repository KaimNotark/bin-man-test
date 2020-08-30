import { RestProvider } from './base';

const urls = {
  list: '/foo',
  getById: (id) => `/foo/${id}`
}

class Applicants extends RestProvider {
  constructor () {
    super();
    this.namespace = '/applicants';
  }

  async dellFile() {
    if (confirm("Удалить файл?")) {
      try {
        const response = await axios.delete(`${this.fileUrl}`);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }

  async removeById(id) {
    try {
      const response = await this.agent.delete(urls.getById(id));
      console.log(response);
      console.log("APIjs--removeById(id)-showApplicants() = ", this.showApplicants());
      return this.showApplicants();
    } catch (error) {
      console.log(error);
      throw error
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

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async showApplicants() {
    console.log("APIjs--showApplicants()-RUN.");

    try {
      const {
        data
      } = await axios.get(this.baseUrl);
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

export const ApplicantsProvider = new Applicants();