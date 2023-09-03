<template>
  <div class="women-wrapper">
    <div class="header__box">
      <TheHeader @tapBurger="burgerActive"/>
    </div>
    <transition>

      <div v-if="mans.visibility" v-for="mans in manTest" :key="mans.id">
        <div class="left_woman">
          <img :src="mans.imageMain" alt="">
        </div>
        <div class="content_woman">
          <div class="right_woman">
            <div class="icon__right__woman">
              <img :src="mans.icon" alt="">
            </div>
            <div id="myProgress">
              <div :style="mans.width" id="myBar"></div>
            </div>
            <div class="step_woman">
              <span>Back</span>
              <span>{{ mans.step }}</span>
            </div>
            <div class="title_woman">
              <h2>{{ mans.title }}</h2>
            </div>
            <div v-for="answers in mans.answer" :key="answers.answerTitle" class="answer_woman">
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
              <router-link v-if="openAnswer" to="/manAnswer">
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
      manTest: this.$store.getters.getManTest,
      navbar: false,
      nextTrue: false,
      counter: 0,
      openAnswer: false,
    };
  },
  methods: {
    burgerActive() {
      this.navbar = !this.navbar
    },
    nextPage() {
      for (let i = 0; i < this.manTest.length; i++) {
        if (this.manTest[i].visibility == true) {
          this.manTest[i].visibility = false
          this.manTest[i += 1].visibility = true
        }
      }
      this.nextTrue = false;
      this.counter++;
      if (this.counter == this.manTest.length - 1) {
        this.openAnswer = true
      }
    }
  }
};
</script>
