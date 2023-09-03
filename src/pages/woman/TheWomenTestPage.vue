<template>
  <div class="women-wrapper">
    <div class="header__box">
      <TheHeader @tapBurger="burgerActive"/>
    </div>
    <transition>
      <div v-if="womans.visibility" v-for="womans in womanTest" :key="womans.id">
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
            <div class="title_woman">
              <h2>{{ womans.title }}</h2>
            </div>
            <div v-for="answers in womans.answer" :key="answers.answerTitle" class="answer_woman">
              <div :class="{anwersActive: !answers.active}" @click="nextTrue = true; answers.active = !answers.active" class="answer">
                <div class="answer__left">
                  <p>{{ answers.answerTitle }}</p>
                  <span>{{ answers.answerText }}</span>
                </div>
                <div v-if="!answers.active" class="answer__right">
                  <img :src="answers.iconAnswer" alt="">
                </div>
                <div v-if="answers.active" class="answer__right">
                  <img :src="answers.iconAnswerTest" alt="">
                </div>
              </div>
            </div>
            <div v-if="nextTrue" @click="nextPage" class="button__box btn__rel">
              <TheButton v-if="!openAnswer" :button-text="'Next step'"/>
              <router-link v-if="openAnswer" to="/womanAnswer">
                <TheButton :button-text="'Next step'"/>
              </router-link>
            </div>
            <div v-if="!nextTrue" class="button__box">
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
      // получаем массив с данными из стора
      womanTest: this.$store.getters.getWomanTest,
      // шаблон состояния меню
      navbar: false,
      // шаблон состояния кнопки
      nextTrue: false,
      // шаблон индекса текущей стр
      counter: 0,
      // шаблон состояния внутренней кнопки
      openAnswer: false,
    };
  },
  methods: {
    burgerActive() {
      // по клику на бургер открываем и закрываем меню
      this.navbar = !this.navbar
    },
    // по клику на кнопку
    nextPage() {
      // проходимся по всему массиву
      for (let i = 0; i < this.womanTest.length; i++) {
        // находим активную страницу
        if (this.womanTest[i].visibility == true) {
          // снимаем с нее активнось
          this.womanTest[i].visibility = false
          // ставим активность на след страницу
          this.womanTest[i += 1].visibility = true
        }
      }

      // снимаю кнопку последней страницы
      this.nextTrue = false;

      // прибавляем к номеру страницы 1
      this.counter++;

      // если этопоследняя страница
      if (this.counter == this.womanTest.length - 1) {
        // вызывваем кнопку последней страницы
        this.openAnswer = true
      }
    }
  }
};
</script>
