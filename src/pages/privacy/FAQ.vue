<template>
  <div class="privacy-wrapper">
    <TheHeader @tapBurger="burgerActive"/>
    <div class="_container">
      <div class="title__1 pivacy__titile">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
      </div>
      <div class="content__privacy">
        <h3>How do I sign up?
        </h3>
        <p>To get started, simply go to <a href="">BetterMe web page</a>, and answer a few quick questions about your workout and nutrition preferences, goals, and overall fitness level. We will also ask for your email: please make sure you’ve entered it correctly. Once we have the necessary information, we will generate a custom meal and workout plan designed just for you, and provide you with the app download link so that you can get started right away.
        </p>
        <h3>How will I receive my customized meal and workout plan?</h3>
        <p>You’ll receive a unique download link that will take you to the AppStore to download the app. Once the app is installed on your phone, you need to sign into the app using your email or Apple ID. You will have unlimited access to all the features within the app for the duration of your paid period.
          If you experience any difficulties with downloading or accessing the app, please contact us at here.</p>
        <h3>When will I receive my customized meal and workout plan?</h3>
        <p>Our smart algorithms are highly precise and are able to customize your fitness plan according to your specific needs. The unique download link will be generated right after your payment. The plan will become available as soon as you download the app using your unique link.</p>
        <h3>Do we always offer free trials?</h3>
        <p>Please note that if a free trial is offered, this will be explicitly stated on the price screen before the checkout. If this is not the case, you will purchase our subscription without a free trial.</p>
        <h3>How will you bill me?</h3>
        <p>Generally we offer subscriptions that automatically renew. Depending on what option you choose, your subscription will be renewed at the end of each period.</p>
        <h3>Can I cancel my subscription?</h3>
        <p>Your subscription renews automatically at the end of each period until you cancel. Note that deleting the app does not cancel your subscriptions. You may cancel a trial or a subscription by following simple steps from our <router-link to="/subscription">Subscription Terms</router-link>.</p>
        <h3>I do not have access to my subscription any longer, what happened?
        </h3>
        <p>We sometimes offer non-renewing subscriptions that expire after the subscription period (1 month, 3 months or 6 months). Once your chosen subscription expires, you lose access to the app. If you wish to continue using the app after your initial subscription expired, you may repurchase it within the app or on BetterMe web page at any time.</p>
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
