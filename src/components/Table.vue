<template>
  <table class="main-table">
    <thead>
      <tr>
        <th>Соискатель</th>
        <th>Телефон</th>
        <th>E-mail</th>
        <th></th>
        <th>Оценка соискателя</th>
        <th></th>
      </tr>
    </thead>

    <tfoot>
      <tr>
        <td>
          <button type="button" class="main-table__button">Показать еще</button>
        </td>
      </tr>
    </tfoot>

    <tbody>
      <tr>
        <td>
          <div class="container-applicant">
            <img src="../../public/images/binman.png" alt="Аватар" class="applicant-img" />
            <div class="applicant-text">
              <p class="applicant-text__name">Бинман Иван Натанович</p>
              <p class="applicant-text__vacancy">Вакансия: Full-stack разработчик</p>
            </div>
          </div>
        </td>
        <td>
          <div class="container-phone">
            <div class="phone-border">
              <img src="../../public/images/phone.png" alt="Телефон" class="phone-border__img" />
            </div>
            <div class="phone-text">
              <p class="phone-text__number">+7 (900) 800-70-60</p>
              <button type="button" class="phone-text__button">Показать еще 1 номер</button>
            </div>
          </div>
        </td>
        <td>
          <div class="container-mail">
            <div class="mail-border">
              <img src="../../public/images/mail.png" alt="E-mail" class="mail-border__img" />
            </div>
            <div class="mail-text">
              <p class="mail-text__e-mail">ioan@binman.ru</p>
              <button type="button" class="mail-text__button">Показать еще 1 e-mail</button>
            </div>
          </div>
        </td>
        <td></td>
        <td></td>
        <td>
          <div class="container-buttons">
            <ul class="buttons-list">
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/resume.png"
                    alt="Резюме"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/archive.png"
                    alt="Архив"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/favorites.png"
                    alt="Избранное"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="container-applicant">
            <img src="../../public/images/durkoff.png" alt="Аватар" class="applicant-img" />
            <div class="applicant-text">
              <p class="applicant-text__name">Дурков Павел Валерьевич</p>
              <p class="applicant-text__vacancy">Вакансия: Full-stack разработчик</p>
            </div>
          </div>
        </td>
        <td>
          <div class="container-phone">
            <div class="phone-border">
              <img src="../../public/images/no-phone.png" alt="Телефон" class="phone-border__img" />
            </div>
            <div class="phone-text">
              <p class="phone-text__number _light-gray">Телефон не указан</p>
              <!-- <button type="button" class="phone-text__button">Показать еще 1 номер</button> -->
            </div>
          </div>
        </td>
        <td>
          <div class="container-mail">
            <div class="mail-border">
              <img src="../../public/images/mail.png" alt="E-mail" class="mail-border__img" />
            </div>
            <div class="mail-text">
              <p class="mail-text__e-mail _margin-top-10px">durkov@vkontakte.ru</p>
              <!-- <button type="button" class="mail-text__button">Показать еще 1 e-mail</button> -->
            </div>
          </div>
        </td>
        <td></td>
        <td></td>
        <td>
          <div class="container-buttons">
            <ul class="buttons-list">
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/resume.png"
                    alt="Резюме"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/archive.png"
                    alt="Архив"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/favorites.png"
                    alt="Избранное"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="container-applicant">
            <img src="../../public/images/lebedin.png" alt="Аватар" class="applicant-img" />
            <div class="applicant-text">
              <p class="applicant-text__name">Лебедин Артеймий Андреевич</p>
              <p class="applicant-text__vacancy">Вакансия: Web-дизайнер</p>
            </div>
          </div>
        </td>
        <td>
          <div class="container-phone">
            <div class="phone-border">
              <img src="../../public/images/phone.png" alt="Телефон" class="phone-border__img" />
            </div>
            <div class="phone-text">
              <p class="phone-text__number _margin-top-10px">+7 (800) 555-35-35</p>
              <!-- <button type="button" class="phone-text__button">Показать еще 1 номер</button> -->
            </div>
          </div>
        </td>
        <td>
          <div class="container-mail">
            <div class="mail-border">
              <img src="../../public/images/mail.png" alt="E-mail" class="mail-border__img" />
            </div>
            <div class="mail-text">
              <p class="mail-text__e-mail _margin-top-10px">design@lebedin.ru</p>
              <!-- <button type="button" class="mail-text__button">Показать еще 1 e-mail</button> -->
            </div>
          </div>
        </td>
        <td></td>
        <td></td>
        <td>
          <div class="container-buttons">
            <ul class="buttons-list">
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/resume.png"
                    alt="Резюме"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/archive.png"
                    alt="Архив"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/favorites.png"
                    alt="Избранное"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="container-applicant">
            <img src="../../public/images/noname.png" alt="Аватар" class="applicant-img" />
            <div class="applicant-text">
              <p class="applicant-text__name">Чулков Олег</p>
              <p class="applicant-text__vacancy">Вакансия: Web-дизайнер</p>
            </div>
          </div>
        </td>
        <td>
          <div class="container-phone">
            <div class="phone-border">
              <img src="../../public/images/no-phone.png" alt="Телефон" class="phone-border__img" />
            </div>
            <div class="phone-text">
              <p class="phone-text__number _light-gray">Телефон не указан</p>
              <!-- <button type="button" class="phone-text__button">Показать еще 1 номер</button> -->
            </div>
          </div>
        </td>
        <td>
          <div class="container-mail">
            <div class="mail-border">
              <img src="../../public/images/no-mail.png" alt="E-mail" class="mail-border__img" />
            </div>
            <div class="mail-text">
              <p class="mail-text__e-mail _light-gray">E-mail не указан</p>
              <!-- <button type="button" class="mail-text__button">Показать еще 1 e-mail</button> -->
            </div>
          </div>
        </td>
        <td></td>
        <td></td>
        <td>
          <div class="container-buttons">
            <ul class="buttons-list">
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/resume.png"
                    alt="Резюме"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/archive.png"
                    alt="Архив"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/favorites.png"
                    alt="Избранное"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="container-applicant">
            <img src="../../public/images/fedora.png" alt="Аватар" class="applicant-img" />
            <div class="applicant-text">
              <p class="applicant-text__name">Федора Линукс Линусович</p>
              <p class="applicant-text__vacancy">Вакансия: Front-end разработчик</p>
            </div>
          </div>
        </td>
        <td>
          <div class="container-phone">
            <div class="phone-border">
              <img src="../../public/images/phone.png" alt="Телефон" class="phone-border__img" />
            </div>
            <div class="phone-text">
              <p class="phone-text__number">+7 (800) 200-06-60</p>
              <button type="button" class="phone-text__button">Показать еще 1 номер</button>
            </div>
          </div>
        </td>
        <td>
          <div class="container-mail">
            <div class="mail-border">
              <img src="../../public/images/mail.png" alt="E-mail" class="mail-border__img" />
            </div>
            <div class="mail-text">
              <p class="mail-text__e-mail">ioan@binman.ru</p>
              <button type="button" class="mail-text__button">Показать еще 1 e-mail</button>
            </div>
          </div>
        </td>
        <td></td>
        <td></td>
        <td>
          <div class="container-buttons">
            <ul class="buttons-list">
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/resume.png"
                    alt="Резюме"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/archive.png"
                    alt="Архив"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
              <li class="buttons-item">
                <button type="button" class="buttons-item__button">
                  <img
                    src="../../public/images/favorites.png"
                    alt="Избранное"
                    class="buttons-item__picture"
                  />
                </button>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table"
};
</script>

<style lang="scss" scoped>
@import "../stylesheets/variables.scss";
@import "../stylesheets/resets.scss";

.main-table {
  border-collapse: collapse;
  background-color: $color-white;
  margin-top: 15px;
}

th {
  color: $color-text-main;
  font-size: 11px;
  font-weight: 700;
  line-height: 12px;
  text-transform: uppercase;
  text-align: left;
}

.container-applicant {
  display: flex;
  justify-content: flex-start;
  width: 250px;
}

.applicant {
  &-img {
    width: 40px;
    height: 40px;
  }
  &-text {
    margin-left: 10px;

    &__name {
      color: $color-text-main;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      margin-top: 5px;
      margin-bottom: 3px;
    }
    &__vacancy {
      color: $color-text-light;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      margin-top: 5px;
      margin-bottom: 3px;
    }
  }
}

.container-phone {
  display: flex;
  justify-content: flex-start;
  width: 160px;
}

.phone {
  &-border {
    width: 36px;
    height: 36px;
    border-radius: 3px;
    background: $color-button-background-gray;

    &__img {
      display: block;
      margin: 10px auto;
    }
  }
  &-text {
    margin-left: 10px;

    &__number {
      color: $color-text-main;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0.3px;
      margin-top: 2px;
      margin-bottom: 3px;
    }
    &__button {
      color: $color-text-light;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      border-top: none;
      border-left: none;
      border-bottom: solid 1px $color-white;
      border-right: none;
      background-color: $color-white;
      transition: background-color 0.1s ease, color 0.3s ease;
      cursor: pointer;
      padding: 0;
      margin-top: 5px;
      margin-bottom: 3px;
    }
    &__button:hover {
      color: $color-text-main;
      border-bottom: solid 1px $color-text-main;
    }
  }
}

.container-mail {
  display: flex;
  justify-content: flex-start;
  width: 166px;
}

.mail {
  &-border {
    width: 36px;
    height: 36px;
    border-radius: 3px;
    background: $color-button-background-gray;

    &__img {
      display: block;
      margin: 12px auto;
    }
  }
  &-text {
    margin-left: 10px;

    &__e-mail {
      color: $color-text-main;
      font-size: 12px;
      font-weight: 700;
      line-height: 14px;
      letter-spacing: 0.3px;
      margin-top: 2px;
      margin-bottom: 3px;
    }
    &__button {
      color: $color-text-light;
      font-size: 10px;
      font-weight: 400;
      line-height: 12px;
      border-top: none;
      border-left: none;
      border-bottom: solid 1px $color-white;
      border-right: none;
      background-color: $color-white;
      transition: background-color 0.1s ease, color 0.3s ease;
      cursor: pointer;
      padding: 0;
      margin-top: 5px;
      margin-bottom: 3px;
    }
    &__button:hover {
      color: $color-text-main;
      border-bottom: solid 1px $color-text-main;
    }
  }
}

.container-buttons {
  width: 120px;
}

.buttons {
  &-list {
    display: flex;
    justify-content: space-between;
  }

  &-item {
    display: block;

    &__button {
      width: 36px;
      height: 36px;
      border: solid 1px $color-button-border;
      border-radius: 3px;
      background: $color-white;
      transition: background-color 0.1s ease, border-color 0.3s ease;
      cursor: pointer;
    }
    &__button:hover {
      background-color: $color-button-background-gray;
      border-color: $color-gray;
      // transform: scale(1.05);
    }

    &__picture {
    }
  }
}

._light-gray {
  color: $color-table__light-gray;
  margin-top: 10px;
}

._margin-top-10px {
  margin-top: 10px;
}
</style>