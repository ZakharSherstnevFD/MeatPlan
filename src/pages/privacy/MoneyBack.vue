<template>
  <div class="privacy-wrapper">
    <TheHeader @tapBurger="burgerActive"/>
    <div class="_container">
      <div class="title__1 pivacy__titile">
        <h2>MONEY-BACK POLICY</h2>
      </div>
      <div class="content__privacy">
        <p>I. MONEY-BACK GUARANTEE RULES
          In addition to refund rights available under applicable laws, if you purchased our app directly on our websites and the money-back option was presented to you during the checkout, you are eligible to receive a refund if you did not get visible results with our program, provided that all of the following conditions are met:</p>
        <p>1.you contact us within 30 days after your initial purchase and before the end of your subscription period; and</p>
        <p>2.you have followed our program (i) at least during 7 consecutive days within the first 30 days after the purchase (for monthly and more lengthy subscription periods) or (ii) at least during 3 consecutive days within the first 7 days after the purchase (for weekly and biweekly subscription periods); and</p>
        <p>3.you are able to demonstrate that you have followed the program pursuant to the requirements stated below in Section “How to demonstrate that you have followed the program”.</p>
      <p>We will review your application and notify you (by email or otherwise) whether your application is approved.</p>
        <h3>HOW TO DEMONSTRATE THAT YOU HAVE FOLLOWED THE PROGRAM</h3>
        <p>
          You can demonstrate that you have followed the program by fulfilling the following simple condition:</p>
        <p>1.you provide screenshots from the app proving that you have finished</p>
        <p>2.at least 7 workout/meditation or other sessions (for monthly and more lengthy subscription periods); or</p>
        <p>3.at least 3 workout/meditation or other sessions (for weekly and biweekly subscription periods).</p>
        <h3>IMPORTANT STATEMENT</h3>
        <p>Please note that only fulfillment of the above requirements allows you to receive a refund under the Money-back Guarantee. For the sake of clarity, this Money-back Guarantee does not apply to any other instances.</p>
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
