import axios from "axios";


class ApplicantsApi {
  constructor () {
    this.baseUrl = 'http://localhost:1337/applicants'
    
    // this.applicants = [
    //   {
    //     id: "0",
    //     name: "Бинман Иван Натанович", // text
    //     vacancy: "Вакансия: Full-stack разработчик", // text
    //     photo: "/images/binman.png", // file
    //     phone1: "+7 (900) 800-70-60", // text
    //     phone2: "+7 (900) 800-70-60", // text
    //     phone3: "+7 (900) 800-70-60", // text
    //     mail1: "ioan@binman.ru", // text
    //     mail2: "ioan@binman.ru", // text
    //     mail3: "ioan@binman.ru", // text
    //     summary: "",  // file
    //     test: "", // file
    //     ratingSummary: 4, // number integer
    //     ratingTest: 4, // number integer
    //     ratingInterview: 4 // number integer

    //     // isHiddenPhone: false,
    //     // isHiddenMail: false,
    //     // isLightGrayPhone: false,
    //     // isLightGrayMail: false,
    //     // ratingColor: "#abd02d",
    //   }
    // ]
  }

  async removeById (id) {
    console.log("Button DELL APPLICANT pressed.");

    try {
      const response = await axios.delete(`${ this.baseUrl }/${ id }`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async addApplicants() {
    console.log("Button ADD APPLICANT pressed.");

    await axios
      .post(this.urlAdd, this.addOneApplicant)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }

  async showApplicants() {
    console.log("Button SHOW ALL APPLICANTS pressed.");

    try {
      const { data } = await axios.get(this.baseUrl)
      console.log("allApplicants --", data);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getApplicants () {
    return Promise.resolve(this.applicants);
  }
}

export const Applicants = new ApplicantsApi();