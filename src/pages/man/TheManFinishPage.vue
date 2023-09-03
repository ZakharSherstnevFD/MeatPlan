<template>
  <div class="women-wrapper">
    <div class="header__box">
      <TheHeader @tapBurger="burgerActive"/>
    </div>
    <div v-if="!loader">
      <div class="left_woman">
        <img src="@/assets/img/man18.jpg" alt="">
      </div>
      <div class="content_woman">
        <div class="right_woman">
          <div class="icon__right__woman">
            <img src="@/assets/img/w18_icon.png" alt="">
          </div>
          <div id="myProgress">
            <div style="width: 100%" id="myBar"></div>
          </div>
          <div class="step_woman">
            <span>Back</span>
            <span>18/18</span>
          </div>
          <div class="title_woman">
            <h2>One last thing. How much time do you have for meal prep daily?</h2>
          </div>
          <div class="answer_woman">

            <div @click="routerPush" @mouseover="answers1 = false" @mouseout="answers1 = true" class="answer">
              <div class="answer__left">
                <p>Less than 30 min</p>
              </div>
              <div v-if="!answers1" class="answer__right">
                <img src="@/assets/img/icon_answer.png" alt="">
              </div>
            </div>

            <div @click="routerPush" @mouseover="answers2 = false" @mouseout="answers2 = true" class="answer">
              <div class="answer__left">
                <p>30-60 min</p>
              </div>
              <div v-if="!answers2" class="answer__right">
                <img src="@/assets/img/icon_answer.png" alt="">
              </div>
            </div>


            <div @click="routerPush" @mouseover="answers3 = false" @mouseout="answers3 = true" class="answer">
              <div class="answer__left">
                <p>More than 1 hour</p>
              </div>
              <div v-if="!answers3" class="answer__right">
                <img src="@/assets/img/icon_answer.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TheNavbar v-if="navbar" @tapBurger="burgerActive"/>
    <div v-if="loader" class="loader">
      <ThePreloader :loaderProc="loaderProc" :width="119" :height="119"/>
    </div>
  </div>

</template>
<script>
import TheHeader from '@/components/UI/TheHeader.vue'
import TheNavbar from '@/components/UI/TheNavbar.vue'
import ThePreloader from "@/components/UI/Preloader.vue";


export default {
  components: {
    ThePreloader,
    TheHeader, TheNavbar
  },
  data() {
    return {
      answers1: true,
      answers2: true,
      answers3: true,
      navbar: false,
      loaderProc: 0,
      loader: false
    };
  },
  methods: {
    burgerActive() {
      this.navbar = !this.navbar
    },
    routerPush() {
      this.loader = true


      setInterval(() => {
        this.loaderProc = this.loaderProc += 1
      }, 80)

      setTimeout(() => {
        clearInterval(100)
      }, 8000)


      setTimeout(() => {
        this.$router.push('plan')
      }, 8000)

    }
  }
};
</script>
