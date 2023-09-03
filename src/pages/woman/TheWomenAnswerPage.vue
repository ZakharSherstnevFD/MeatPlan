<template>
  <div class="women-wrapper">
    <div class="header__box">
      <TheHeader @tapBurger="burgerActive"/>
    </div>
    <transition>

      <div v-if="womans.visibility" v-for="womans in womanAnswer" :key="womans.id">
        <div class="left_woman">
          <img :src="womans.imageMain" alt="">
        </div>
        <div class="content_woman">
          <div class="right_woman">
            <div class="icon__right__woman">
              <img :src="womans.icon" alt="">
            </div>
            <div id="myProgress">
              <div :style="womans.width" id="myBar"></div>
            </div>
            <div class="step_woman">
              <span>Back</span>
              <span>{{ womans.step }}</span>
            </div>
            <div style="text-align: center" class="title_woman">
              <h2>{{ womans.title }}</h2>
            </div>
            <div class="answer_woman">
              <div class="answer_input">
                <input v-model="pole"
                       @keydown="templateDown" :placeholder="womans.placeholder"
                       maxlength="3">
              </div>
            </div>
            <transition>
              <div v-if="womans.textTitle" class="popup__answer__pole">
                <div v-if="popup" class="text__wa">
                  <h3>{{ womans.textTitle }}</h3>
                  <p>{{ womans.textParagraph }}</p>
                </div>
              </div>
            </transition>
            <div v-if="nextTrue" @click="nextPage" class="button__box button__box_inp btn__rel">
              <TheButton v-if="!openAnswer" :button-text="'Next step'"/>
              <router-link v-if="openAnswer" to="/womanFinish">
                <TheButton :button-text="'Next step'"/>
              </router-link>
            </div>
            <div v-if="!nextTrue" class="button__box button__box_inp">
              <div class="default__button">
                Next step
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <TheNavbar v-if="navbar" @tapBurger="burgerActive"/>
  </div>

</template>
<script>
import TheHeader from '@/components/UI/TheHeader.vue'
import TheNavbar from '@/components/UI/TheNavbar.vue'
import TheButton from '@/components/UI/TheButton.vue'


export default {
  components: {
    TheHeader, TheNavbar, TheButton
  },
  data() {
    return {
      // массив данных из стора
      womanAnswer: this.$store.getters.womanAnswer,
      // состояние меню
      navbar: false,
      // состояние кнопки с переходом (зависит от того выбран ли один из вариантов)
      nextTrue: false,
      // счетчик номера страницы
      counter: 0,
      // состояние кнопки в зависимости от того последний ли это элемент массива и надо ли переключать на след страницу
      openAnswer: false,
      // состояние всплывашки
      popup: false,
      // поле формы для данных о росте весе и тд
      pole: '',
      // массив куда записываются данные с полей
      poleValue: []
    };
  },


  methods: {
    // открывает и закрывает мню по клику на бургер
    burgerActive() {
      this.navbar = !this.navbar
    },
    // по клику на кнопку последней страницы
    nextPage() {
      // перебираем все элементы массива (все страницы)
      for (let i = 0; i < this.womanAnswer.length; i++) {
        //если страница видна
        if (this.womanAnswer[i].visibility == true) {
          // делаем ее невидимой
          this.womanAnswer[i].visibility = false
          // следующую страницу видимой
          this.womanAnswer[i += 1].visibility = true
        }
      }
      // подписываемся на шаблон поля для данных
      let newPole = this.pole
      // пушим полученные данные в массив
      this.poleValue.push(newPole)

      // снимаем активность с кнопки переключения страницы
      this.nextTrue = false;

      // увеличиваем счетчик номера страницы на 1
      this.counter++;

      //если это последняя страница
      if (this.counter == this.womanAnswer.length - 1) {
        // вызываем кнопку для последней страницы
        this.openAnswer = true
        // пушим полученные данные в стор
        this.$store.dispatch("setPole", this.poleValue)
      }

      // закрываем всплывашку
      this.popup = false;
      // сбрасываем занные поля
      this.pole = ''
    },

    // когда что-то напсали в поле ввода
    templateDown() {
      // разрешаем переход на след страницу
      this.nextTrue = true;
      // открываем всплывашку
      this.popup = true;
    }
  }
};
</script>

<style>
.errorText {
  margin-bottom: 8px;
  font-size: 12px;
  color: darkred;
}

</style>
