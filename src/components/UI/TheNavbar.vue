<template>
  <transition>
    <div class="navbar-box">
      <nav class="nav">
        <div class="close" @click="tapBurger">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path d="M1 14L14 1" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 14L1 1" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <router-link to="/contact">Contact Us</router-link>
        <router-link to="/faq">FAQ</router-link>
        <router-link to="/terms">Terms of Service</router-link>
        <router-link to="/privacy">Privacy Policy</router-link>
        <router-link to="/subscription">Subscription Policy</router-link>
        <router-link to="/moneyBack">Money-Back Policy</router-link>
      </nav>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    tapBurger() {
      this.$emit("tapBurger")
    }
  }
};
</script>



