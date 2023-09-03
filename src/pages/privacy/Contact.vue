<template>
  <div class="privacy-wrapper">
    <TheHeader @tapBurger="burgerActive"/>
    <div class="_container">
      <div class="title__1 pivacy__titile">
        <h2>Contact Us</h2>
      </div>
      <div class="content__privacy">
        We will be glad to assist you via email. Please send your questions and feedback here or to <a href="mailto:support@betterme.world">support@betterme.world</a>
      </div>
    </div>
    <TheNavbar v-if="navbar" @tapBurger="burgerActive"/>
  </div>
</template>
<script>
import TheHeader from "@/components/UI/TheHeader.vue";
import TheNavbar from "@/components/UI/TheNavbar.vue";
export default {
  components: {
    TheNavbar,
    TheHeader,
  },
  data() {
    return {
      navbar: false
    }
  },
  methods: {
    burgerActive() {
      this.navbar = !this.navbar
    },
  }
}
</script>
