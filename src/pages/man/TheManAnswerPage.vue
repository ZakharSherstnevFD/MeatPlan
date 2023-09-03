<template>
  <div class="women-wrapper">
    <div class="header__box">
      <TheHeader @tapBurger="burgerActive"/>
    </div>
    <transition>
      <div v-if="mans.visibility" v-for="mans in manAnswer" :key="mans.id">
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
            <div style="text-align: center" class="title_woman">
              <h2>{{ mans.title }}</h2>
            </div>
            <div class="answer_woman">
              <div class="answer_input">
                <input v-model="pole"
                       @keydown="templateDown" :placeholder="mans.placeholder"
                       maxlength="3">
              </div>
            </div>
            <div v-if="mans.textTitle" class="">
              <div v-if="popup" class="text__wa">
                <h3>{{ mans.textTitle }}</h3>
                <p>{{ mans.textParagraph }}</p>
              </div>
            </div>
            <div v-if="nextTrue" @click="nextPage" class="button__box button__box_inp btn__rel">
              <TheButton v-if="!openAnswer" :button-text="'Next step'"/>
              <router-link v-if="openAnswer" to="/manFinish">
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
      manAnswer: this.$store.getters.manAnswer,
      navbar: false,
      nextTrue: false,
      counter: 0,
      openAnswer: false,
      popup: false,
      pole: '',
      poleValue: []
    };
  },

  methods: {
    burgerActive() {
      this.navbar = !this.navbar
    },
    nextPage() {
      for (let i = 0; i < this.manAnswer.length; i++) {
        if (this.manAnswer[i].visibility == true) {
          this.manAnswer[i].visibility = false
          this.manAnswer[i += 1].visibility = true
        }
      }


      let newPole = this.pole
      this.poleValue.push(newPole)


      this.nextTrue = false;
      this.counter++;
      if (this.counter == this.manAnswer.length - 1) {
        this.openAnswer = true
        this.$store.dispatch("setPole", this.poleValue)
      }
      this.popup = false;
      this.pole = ''
    },
    templateDown() {
      this.nextTrue = true;
      this.popup = true;
    }
  }
};
</script>
