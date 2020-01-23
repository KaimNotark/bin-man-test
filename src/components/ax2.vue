<template>
  <div class="ax2-container">
    <input type="text" placeholder="введите число A" v-model="varA" class="ax2-var__a" />

    <p class="ax2-show__a">Число А = {{ varA }}</p>

    <input type="text" placeholder="введите число B" v-model="varB" class="ax2-var__b" />

    <p class="ax2-show__b">Число B = {{ varB }}</p>

    <input type="text" placeholder="введите число C" v-model="varC" class="ax2-var__c" />

    <p class="ax2-show__c">Число C = {{ varC }}</p>

    <button class="ax2-btn__calculate" @click="calculate">Посчитать</button>

    <p class="ax2-show__d">D = {{ varD }}</p>
    <p class="ax2-show__x">Ответ X1 = {{ resultX1 }}</p>
    <p class="ax2-show__x">Ответ X2 = {{ resultX2 }}</p>
  </div>
</template>

<script>
export default {
  name: "ax2",

  data: function() {
    return {
      varA: null,
      varB: null,
      varC: null,

      varD: null,

      resultX1: null,
      resultX2: null
    };
  },

  methods: {
    calculate() {
      console.log("button was pressed");

      if (this.varA == 0) {
        console.log("A = 0");
        this.varA = null;
        alert("Введите число А заново, оне не может быть равно нулю.");
      } else {
        console.log("A != 0");

        this.varD = this.varB * this.varB - 4 * this.varA * (this.varC - 7);
        console.log("varD = " + this.varD);

        if (this.varD < 0) {
          alert(
            "Нет вещественных корней, т.к. D=" +
              this.varD +
              ", а это меньше нуля."
          );
          this.varA = null;
          this.varB = null;
          this.varC = null;
        } else {
          if (this.varD == 0) {
            this.resultX1 = -(this.varB / (2 * this.varA));
          } else {
            this.resultX1 =
              (-this.varB + Math.sqrt(this.varD)) / (2 * this.varA);
            this.resultX2 =
              (-this.varB - Math.sqrt(this.varD)) / (2 * this.varA);
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ax2 {
  &-container {
    display: flex;
    flex-direction: column;
  }

  &-show {
    &__a,
    &__b,
    &__c {
    }
  }

  &-var {
    &__a,
    &__b,
    &__c {
      width: 200px;
      height: 30px;
    }
  }

  &-btn__calculate {
    width: 200px;
    height: 30px;
  }
}
</style>