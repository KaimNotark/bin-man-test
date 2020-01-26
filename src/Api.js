import axios from "axios";


class ApplicantsApi {
  constructor () {
    this.baseUrl = 'http://localhost:1337/applicants'
    
    this.applicants = [
      {
        id: "0",
        avatar: "/images/binman.png",
        name: "Бинман Иван Натанович",
        vacancy: "Вакансия: Full-stack разработчик",
        phone: "+7 (900) 800-70-60",
        mail: "ioan@binman.ru",
        isHiddenPhone: false,
        isHiddenMail: false,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#abd02d",
        ratingValue: 4
      },
      {
        id: "1",
        avatar: "/images/durkoff.png",
        name: "Дурков Павел Валерьевич",
        vacancy: "Вакансия: Full-stack разработчик",
        phone: "Телефон не указан",
        mail: "durkov@vkontakte.ru",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: true,
        isLightGrayMail: false,
        ratingColor: "#ff5d00",
        ratingValue: 1
      },
      {
        id: "2",
        avatar: "/images/lebedin.png",
        name: "Лебедин Артеймий Андреевич",
        vacancy: "Вакансия: Web-дизайнер",
        phone: "+7 (800) 555-35-35",
        mail: "design@lebedin.ru",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#dae700",
        ratingValue: 3
      },
      {
        id: "3",
        avatar: "/images/noname.png",
        name: "Чулков Олег",
        vacancy: "Вакансия: Web-дизайнер",
        phone: "Телефон не указан",
        mail: "E-mail не указан",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: true,
        isLightGrayMail: true,
        ratingColor: "#ffa800",
        ratingValue: 2
      },
      {
        id: "4",
        avatar: "/images/fedora.png",
        name: "Федора Линукс Линусович",
        vacancy: "Вакансия: Front-end разработчик",
        phone: "+7 (800) 200-06-60",
        mail: "ioan@binman.ru",
        isHiddenPhone: false,
        isHiddenMail: false,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#67c600",
        ratingValue: 5
      },
      {
        id: "5",
        avatar: "/images/binman.png",
        name: "Бинман Иван Натанович",
        vacancy: "Вакансия: Full-stack разработчик",
        phone: "+7 (900) 800-70-60",
        mail: "ioan@binman.ru",
        isHiddenPhone: false,
        isHiddenMail: false,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#abd02d",
        ratingValue: 4
      },
      {
        id: "6",
        avatar: "/images/durkoff.png",
        name: "Дурков Павел Валерьевич",
        vacancy: "Вакансия: Full-stack разработчик",
        phone: "Телефон не указан",
        mail: "durkov@vkontakte.ru",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: true,
        isLightGrayMail: false,
        ratingColor: "#ff5d00",
        ratingValue: 1
      },
      {
        id: "7",
        avatar: "/images/lebedin.png",
        name: "Лебедин Артеймий Андреевич",
        vacancy: "Вакансия: Web-дизайнер",
        phone: "+7 (800) 555-35-35",
        mail: "design@lebedin.ru",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#dae700",
        ratingValue: 3
      },
      {
        id: "8",
        avatar: "/images/noname.png",
        name: "Чулков Олег",
        vacancy: "Вакансия: Web-дизайнер",
        phone: "Телефон не указан",
        mail: "E-mail не указан",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: true,
        isLightGrayMail: true,
        ratingColor: "#ffa800",
        ratingValue: 2
      },
      {
        id: "9",
        avatar: "/images/fedora.png",
        name: "Федора Линукс Линусович",
        vacancy: "Вакансия: Front-end разработчик",
        phone: "+7 (800) 200-06-60",
        mail: "ioan@binman.ru",
        isHiddenPhone: false,
        isHiddenMail: false,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#67c600",
        ratingValue: 5
      },
      {
        id: "10",
        avatar: "/images/binman.png",
        name: "Бинман Иван Натанович",
        vacancy: "Вакансия: Full-stack разработчик",
        phone: "+7 (900) 800-70-60",
        mail: "ioan@binman.ru",
        isHiddenPhone: false,
        isHiddenMail: false,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#abd02d",
        ratingValue: 4
      },
      {
        id: "11",
        avatar: "/images/durkoff.png",
        name: "Дурков Павел Валерьевич",
        vacancy: "Вакансия: Full-stack разработчик",
        phone: "Телефон не указан",
        mail: "durkov@vkontakte.ru",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: true,
        isLightGrayMail: false,
        ratingColor: "#ff5d00",
        ratingValue: 1
      },
      {
        id: "12",
        avatar: "/images/lebedin.png",
        name: "Лебедин Артеймий Андреевич",
        vacancy: "Вакансия: Web-дизайнер",
        phone: "+7 (800) 555-35-35",
        mail: "design@lebedin.ru",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#dae700",
        ratingValue: 3
      },
      {
        id: "13",
        avatar: "/images/noname.png",
        name: "Чулков Олег",
        vacancy: "Вакансия: Web-дизайнер",
        phone: "Телефон не указан",
        mail: "E-mail не указан",
        isHiddenPhone: true,
        isHiddenMail: true,
        isLightGrayPhone: true,
        isLightGrayMail: true,
        ratingColor: "#ffa800",
        ratingValue: 2
      },
      {
        id: "14",
        avatar: "/images/fedora.png",
        name: "Федора Линукс Линусович",
        vacancy: "Вакансия: Front-end разработчик",
        phone: "+7 (800) 200-06-60",
        mail: "ioan@binman.ru",
        isHiddenPhone: false,
        isHiddenMail: false,
        isLightGrayPhone: false,
        isLightGrayMail: false,
        ratingColor: "#67c600",
        ratingValue: 5
      }
    ]
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