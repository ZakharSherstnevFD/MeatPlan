<template>
  <div class="start-page__wrapper">
    <div class="_container">
      <TheHeader @tapBurger="burgerActive"/>
      <div class="title__start">
        <h1>PERSONALIZED WEIGHT LOSS PLAN</h1>
        <p>According to your Body Type & BMI</p>
        <h3>Take 1-minute quiz</h3>
      </div>
      <div class="content__start">
          <router-link to="/woman">
            <TheButton :buttonText="'For women'"/>
          </router-link>
        <div class="center__start">
          <img src="@/assets/img/people_start.png" alt="">
        </div>
        <router-link to="/man">
          <TheButton :buttonText="'For men'"/>
        </router-link>
      </div>
      <div class="content__start__mob">
        <router-link to="/woman">
          <TheButton :buttonText="'For women'"/>
        </router-link>
        <router-link to="/man">
          <TheButton :buttonText="'For men'"/>
        </router-link>
        <div class="img__start__mob">
          <img src="@/assets/img/start__mob.png" alt="">
        </div>
      </div>
    </div>
    <TheNavbar v-if="navbar" @tapBurger="burgerActive"/>
  </div>
</template>

<script>
import TheHeader from '@/components/UI/TheHeader.vue'
import TheButton from '@/components/UI/TheButton.vue'
import TheNavbar from '@/components/UI/TheNavbar.vue'

export default {
  components: {
    TheHeader, TheButton, TheNavbar
  },
  data() {
    return {
      navbar: false
    };
  },
  methods: {
    // по клику на бургер открывается меню
    burgerActive() {
      this.navbar = !this.navbar
    }
  }
};
</script>
