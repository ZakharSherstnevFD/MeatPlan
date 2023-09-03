<template>
  <div class="women-wrapper">
    <div class="header__box">
      <TheHeader @tapBurger="burgerActive"/>
    </div>
    <transition>
      <div v-if="mans.visibility" v-for="mans in man" :key="mans.id">
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
            <div v-for="answers in mans.answer" :key="mans.answerTitle" class="answer_woman">
              <div v-if="!openTest" @click="nextPage" @mouseover="answers.active = false"
                   @mouseout="answers.active = true" class="answer">
                <div class="answer__left">
                  <p>{{ answers.answerTitle }}</p>
                  <span>{{ answers.answerText }}</span>
                </div>
                <div v-if="!answers.active" class="answer__right">
                  <img :src="answers.iconAnswer" alt="">
                </div>
              </div>
              <router-link v-if="openTest" to="/manTest">
                <div @click="nextPage" @mouseover="answers.active = false" @mouseout="answers.active = true"
                     class="answer">
                  <div class="answer__left">
                    <p>{{ answers.answerTitle }}</p>
                    <span>{{ answers.answerText }}</span>
                  </div>
                  <div v-if="!answers.active" class="answer__right">
                    <img :src="answers.iconAnswer" alt="">
                  </div>
                </div>
              </router-link>
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

export default {
  components: {
    TheHeader, TheNavbar
  },
  data() {
    return {
      man: this.$store.getters.getMan,
      navbar: false,
      openTest: false,
      counter: 0
    };
  },
  methods: {
    burgerActive() {
      this.navbar = !this.navbar
    },
    nextPage() {
      for (let i = 0; i < this.man.length; i++) {
        if (this.man[i].visibility == true) {
          this.man[i].visibility = false
          this.man[i += 1].visibility = true
        }
      }
      this.counter++;
      if (this.counter == this.man.length - 1) {
        this.openTest = true
      }


    }
  }
};
</script>
