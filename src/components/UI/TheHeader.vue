<template>
  <div class="header">
    <a href="">
      <div class="logo">
        <img src="@/assets/img/logo.png">
      </div>
    </a>
    <div v-if="timer" class="timer__box header__finish">
      <div class="text__timer">
        <p>Reserved price for:</p>
      </div>
      <div class="timer">
        00:00
      </div>
      <div class="button__timer">
        <a href="">
          <span class="btnHeader">Get My Plan</span>
        </a>
      </div>
    </div>
    <div @click="tapBurger" class="burger">
      <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 46 46" fill="none">
        <circle cx="23" cy="23" r="23" fill="url(#paint0_linear_6_757)"/>
        <rect x="10.8728" y="15.0544" width="24.2545" height="3.34545" rx="1.67273" fill="white"/>
        <rect x="21.7454" y="21.7454" width="13.3818" height="3.34545" rx="1.67273" fill="white"/>
        <rect x="10.8728" y="28.4363" width="24.2545" height="3.34545" rx="1.67273" fill="white"/>
        <defs>
          <linearGradient id="paint0_linear_6_757" x1="46" y1="23" x2="-1.74242" y2="23" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F44845"/>
            <stop offset="1" stop-color="#FF925F"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timer: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    tapBurger() {
      this.$emit("tapBurger")
    }
  }
};
</script>


<style scoped>

</style>
