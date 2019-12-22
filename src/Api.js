class MockApiClass {
  constructor () {
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
        ratingValue: "4.0"
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
        ratingValue: "1.0"
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
        ratingValue: "3.0"
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
        ratingValue: "2.0"
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
        ratingValue: "5.0"
      }
    ]
  }

  async getApplicants () {
    return Promise.resolve(this.applicants);
  }
}

export const MockApi = new MockApiClass();