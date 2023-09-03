<template>
  <div  class="privacy-wrapper">
    <TheHeader @tapBurger="burgerActive"/>
    <div class="_container">
      <div class="title__1 pivacy__titile">
        <h2>SUBSCRIPTION TERMS</h2>
      </div>
      <div class="content__privacy">
<p>1.         Free or paid trial. We may offer a free or paid (for a small payment) trial subscription for the service. Unless you cancel before the end of the trial, you will be automatically charged a price indicated on the payment screen or/and Apple’s/Google’s payment pop-up screen for a chosen subscription period. Please note that if a trial is offered, this will be explicitly stated on the price screen before the checkout. If this is not the case, you will purchase our subscription without a trial. We may also from time to time offer discounted offers that renew at the full not discounted price and other offers that may be interesting for you.
  <br>
  2.         Subscription. The subscription renews automatically at the end of each period (each week, month, 6 months, year, or otherwise, depending on the option selected by you at the time of purchase) until you cancel.
  <br>
  3.         Payment method.  Payment will be charged to the payment method you submitted at the time of purchase at confirmation of purchase (after you confirm by single-touch identification, facial recognition, or entering your payment method details on the web, or otherwise accepting subscription terms provided on the payment screen or on the pop-up screen provided by Apple/Google or on our web page) or after the end of the trial period. You authorize us to charge the applicable subscription fees to the payment method that you use.
  <br>
  4.         Cancellation. Your subscription renews automatically at the end of each period until you cancel. Note that deleting the app does not cancel your subscriptions.

</p>
        <h3>If you purchased a subscription or enabled trial on the App Store:</h3>
        <p>You may cancel a free trial or a subscription anytime by turning off auto-renewal through your Apple ID account settings. To avoid being charged, cancel the subscription in your Apple ID account settings at least 24 hours before the end of the free trial or the current subscription period. You alone can manage your subscriptions. Learn more about managing subscriptions (and how to cancel them) on Apple support page.</p>
      <h3>If you purchased a subscription or enabled trial on Google Play</h3>

        <p>You may cancel a free trial or a subscription anytime by turning off auto-renewal through your Google Play account settings. To avoid being charged, cancel the subscription in your account settings at least 24 hours before the end of the trial or the current subscription period. You alone can manage your subscriptions. Learn more about managing subscriptions (and how to cancel them) on Google’s support page.</p>

     <h3>If you purchased a subscription or enabled trial on Huawei AppGallery:</h3>
      <p>You may cancel a free trial or a subscription anytime by turning off auto-renewal through your Huawei account settings. To avoid being charged, cancel the subscription in your account settings at least 24 hours before the end of the trial or the current subscription period. You alone can manage your subscriptions. Learn more about managing subscriptions (and how to cancel them) on Huawei’s support page.</p>
      <h3>If you purchased a subscription or enabled trial on our websites</h3>
        <p>To avoid being charged cancel your subscription before the end of the then-current period. You may cancel your subscription purchased on our website in your profile. Below you may find several options (that may change from time to time) on how to initiate cancelation of a web subscription:</p>
      <h3>If you purchased a subscription or enabled trial on App Store</h3>
        <p>If you are eligible for a refund, you'll have to request it directly from Apple. To request a refund, follow these instructions from the Apple support page.</p>
        <h3>If you purchased a subscription or enabled trial on Google Play:</h3>
        <p>If you are eligible for a refund, you'll have to request it directly from Google. To request a refund, follow these instructions from the Google’s support page.</p>
        <h3>If you purchased a subscription or enabled trial on Huawei AppGallery</h3>
<p>If you are eligible for a refund, you’ll have to request it directly from Huawei. For instructions on how to request a refund, contact Huawei’s customer support.</p>
        <h3>If you purchased a subscription or enabled trial on our websites</h3>
        <p>We provide refunds at our own discretion and subject to laws and our policies that may be published from time to time. Refund will be provided if we find the request acceptable.
          <br>
          Please note that after your subscription period expires, we will not be able to refund you as the service will be deemed consumed in full, unless otherwise provided for by applicable law.
          <br>
          6.         Changes. To the maximum extent permitted by applicable laws, we may change subscription fees at any time. We will give you reasonable notice of any such pricing changes by posting the new prices on or through the app and/or by sending you an email notification, or in other prominent ways. If you do not wish to pay the new fees, you can cancel the applicable subscription prior to the change going into effect.
          <br>
          If you have any questions in relation to the subscription terms, please contact us via the chat functionality or directly at support@betterme.world</p>
        <p>
          Any translation from the English version is provided for your convenience only. In the event of any difference in meaning, version, or interpretation between the English language version of this Subscription Terms available at https://quiz.betterme.world/subscription-policy and any translation, the English language version will prevail.

          Please make a screenshot of this information for your reference. This may help you to control your subscriptions.

          Last update: 20 August 2023</p>
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
