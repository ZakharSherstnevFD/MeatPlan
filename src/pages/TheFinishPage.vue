<template>
  <div class="finish-wrapper">
    <div class="_container">
      <TheHeader :timer="true" @tapBurger="burgerActive"/>
      <div class="header__bot">
        <div class="text__timer">
          <p>Reserved price for: </p>
          <div class="timer">
            00:00
          </div>
        </div>
        <div class="button__timer">
          <a href="">
            <span class="btnHeader">Get My Plan</span>
          </a>
        </div>
      </div>
      <div class="finish-1">
        <div class="left__f__1">
          <h2>Start Losing Weight Right Now!</h2>
          <p>Join over 10,000,000 members of the BetterMe family</p>
          <a href="">
            <div class="button__f">
              Get My Plan
            </div>
          </a>
        </div>
        <div class="right__f__1">
          <img src="@/assets/img/f1.png" alt="">
        </div>
      </div>
      <div class="finish-2">
        <h3 class="mobile title__mobile">What you get</h3>
        <div class="left__f__2">
          <img src="@/assets/img/phone__f2.png" alt="">
        </div>
        <div class="right__f__2">
          <h3 class="desktop">What you get</h3>
          <ul>
            <li><span><img src="@/assets/img/icon_answer.png" alt=""></span>
              <p>Professional analysis of your nutritional needs</p></li>
            <li><span><img src="@/assets/img/icon_answer.png" alt=""></span>
              <p>Personalized Meal Plans tailored to your needs, and the result will not keep you waiting</p></li>
            <li><span><img src="@/assets/img/icon_answer.png" alt=""></span>
              <p>15-minute fat-burning workouts targeting your problem areas</p></li>
            <li><span><img src="@/assets/img/icon_answer.png" alt=""></span>
              <p>Simple ingredients that you can find in any store</p></li>
            <li><span><img src="@/assets/img/icon_answer.png" alt=""></span>
              <p>Hacks to to speed up your weight loss</p></li>
            <li><span><img src="@/assets/img/icon_answer.png" alt=""></span>
              <p>Daily tips for a healthy lifestyle</p></li>
            <li><span><img src="@/assets/img/icon_answer.png" alt=""></span>
              <p>On-demand support from our fitness & nutrition specialists</p></li>
          </ul>
        </div>
      </div>
      <div class="finish-3">
        <div class="title__f3">
          <h2>Choose Your Plan</h2>
        </div>
        <div class="tarif__f3">
          <div @click="tar1()" :class="{active: isActive1}" class="tar">
            <div class="l1__tar">
              <div class="left__tar">
                <img v-if="isActive1" src="@/assets/img/icon_answer.png">
                <svg v-if="!isActive1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                     fill="none">
                  <circle cx="15" cy="15" r="15" fill="#EDEDED"/>
                  <circle cx="15" cy="15" r="15" fill="#EDEDED"/>
                </svg>
              </div>
              <div class="center__tar">
                <p>7-day plan</p>
                <span>$14.28</span>
              </div>
            </div>
            <div class="right__tar">
              <div class="price__main">
                <span>$</span>
                <p>2</p>
              </div>
              <div class="price__noMain">
                <span>03</span>
                <p>per day</p>
              </div>
            </div>
          </div>
          <div @click="tar2()" :class="{active: isActive2}" class="tar">
            <div class="l1__tar">
              <div class="left__tar">
                <img v-if="isActive2" src="@/assets/img/icon_answer.png">
                <svg v-if="!isActive2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                     fill="none">
                  <circle cx="15" cy="15" r="15" fill="#EDEDED"/>
                  <circle cx="15" cy="15" r="15" fill="#EDEDED"/>
                </svg>
              </div>
              <div class="center__tar">
                <p>1-month plan</p>
                <span>$42.84</span>
              </div>
            </div>
            <div class="right__tar">
              <div class="price__main">
                <span>$</span>
                <p>1</p>
              </div>
              <div class="price__noMain">
                <span>53</span>
                <p>per day</p>
              </div>
            </div>
          </div>
          <div @click="tar3()" :class="{active: isActive3}" class="tar">
            <div class="l1__tar">
              <div class="left__tar">
                <img v-if="isActive3" src="@/assets/img/icon_answer.png">
                <svg v-if="!isActive3" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                     fill="none">
                  <circle cx="15" cy="15" r="15" fill="#EDEDED"/>
                  <circle cx="15" cy="15" r="15" fill="#EDEDED"/>
                </svg>
              </div>
              <div class="center__tar">
                <p>3-month plan</p>
                <span>$71.41</span>
              </div>
            </div>
            <div class="right__tar">
              <div class="price__main">
                <span>$</span>
                <p>0</p>
              </div>
              <div class="price__noMain">
                <span>85</span>
                <p>per day</p>
              </div>
            </div>
          </div>
        </div>
        <div class="button__finish">
          <a href="">
            <div class="btn">Get My Plan</div>
          </a>
        </div>
        <p class="price__text">Extended monthly after a 1-month intro offer at the full price of ${{ price }}</p>
      </div>
      <div class="finish-4">
        <div class="title__f4">
          <h2>People just like you achieved great results
            using our Weight Loss Plans</h2>
          <p>We are proud of these results and can't wait to see yours!</p>
        </div>
        <div class="content__f4">
          <carousel :paginationSize="20" :paginationColor="'#000'" :paginationActiveColor="'#ffffff'" :perPage="1"
                    :perPageCustom="[[1360, 3]]">
            <slide>
              <div class="box__f4">
                <div class="top__f4__box">
                  <img src="@/assets/img/f4__1.jpg" alt="">
                </div>
                <div class="center__f4__box">
                  <p>Warren</p>
                  <p>-8 kg</p>
                </div>
                <div class="bottom__f4__box">
                  <p>I had lost 32 Ibs and 30”,10 of those inches were from my belly alone. What a huge help this app
                    has
                    been. Thank you.</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="box__f4">
                <div class="top__f4__box">
                  <img src="@/assets/img/f4__2.jpg" alt="">
                </div>
                <div class="center__f4__box">
                  <p>Peter</p>
                  <p>-5 kg</p>
                </div>
                <div class="bottom__f4__box">
                  <p>The videos are really helpful and easy to understand. The meals adviser also works well for me. I
                    can
                    sleep early now. This app works for me!</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="box__f4">
                <div class="top__f4__box">
                  <img src="@/assets/img/f4__3.jpg" alt="">
                </div>
                <div class="center__f4__box">
                  <p>John</p>
                  <p>-4 kg</p>
                </div>
                <div class="bottom__f4__box">
                  <p>Why do I work out with BetterMe? For starters, there’s the fact that all people want to look good.
                    In
                    order to have a fit appearance and keep your mental</p>
                </div>
              </div>
            </slide>
          </carousel>


        </div>
      </div>
      <div class="disclaimer">
        <p><span>*Disclaimer</span>: Following exercise and a meal plan is the key in your fitness journey and greatly
          impacts the results. It’s unusual to lose more than 8 pounds per month. Consult a physician first.</p>
      </div>
      <div class="finish-5">
        <div class="title__f5">
          <h2>Users love our plans</h2>
        </div>
        <div class="content__f5">
          <carousel :paginationSize="20" :paginationColor="'#000'" :paginationActiveColor="'#ffffff'" :perPage="1"
                    :perPageCustom="[[1360, 3]]">
            <slide>
              <div class="f5__box">
                <div class="top__f5__box">
                  <div class="title__f5__box">
                    <p>How the program helps me</p>
                  </div>
                  <div class="stars__f5__box">
                    <p>7 May</p>
                    <img src="@/assets/img/stars.png" alt="">
                  </div>
                </div>
                <div class="bottom__f5__box">
                  <p>The hardest part for me was to have a plan and stick with it.... Better Me has it all laid out. The
                    MOST important lesson I have learned though.....even though I might feel that I “don’t eat a lot”
                    counting those calories will reveal your TRUTH. What you eat is a fraction of the battle....count
                    those
                    calories and WIN the battle.</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="f5__box">
                <div class="top__f5__box">
                  <div class="title__f5__box">
                    <p>Convenient for <br> moms</p>
                  </div>
                  <div class="stars__f5__box">
                    <p>8 Jun</p>
                    <img src="@/assets/img/stars.png" alt="">
                  </div>
                </div>
                <div class="bottom__f5__box">
                  <p>I’ve never really been into sports, and you don’t have that much time if you’re a stay at home mom.
                    I
                    have understood that I really need to work out when carrying my infant around the house started to
                    hurt
                    my back. So I downloaded Betterme and started doing shoulder/back routines. This may sound
                    unbelievable
                    but after a week my back pain disappeared and I could hold my baby for a longer time. I performed
                    the
                    exercises for 10 to 15 minutes and got unbelievable results. That happened a few months ago. In some
                    time, I deleted the app, thinking I could find something better without paying. Obviously, I was
                    wrong
                    and did no exercise after deleting the app. So I’m installing it again and look forward to working
                    out!</p>
                </div>
              </div>
            </slide>
            <slide>
              <div class="f5__box">
                <div class="top__f5__box">
                  <div class="title__f5__box">
                    <p>Thank You!</p>
                  </div>
                  <div class="stars__f5__box">
                    <p>18 May</p>
                    <img src="@/assets/img/stars.png" alt="">
                  </div>
                </div>
                <div class="bottom__f5__box">
                  <p>Ok, so whoever made this a thing I thank you so much! That’s because this is making me fit and I
                    think
                    if I do it for the while month or maybe even just this whole week I will most definitely lose some
                    pounds and burn some belly fat. I mean it is a little tiering but anywhere they have good exercises
                    then
                    it will tire you and you will be tired afterwards. But I get support from my mom because we do it
                    together so it is fun/funny for us. Thank you and to you reading this have a great day.</p>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="finish-6">
        <div class="title__f6">
          <h2>People Often Ask</h2>
        </div>
        <div class="content__f6">
          <carousel :paginationSize="20" :paginationColor="'#000'" :paginationActiveColor="'#ffffff'" :perPage="1"
                    :perPageCustom="[[1360, 3]]">
            <slide>
              <div class="box__f6">
                <h2>?</h2>
                <h3>I’m worried that I’ll quit the Meal Plan halfway.</h3>
                <p>We totally get it, and that’s why we made sure that our Meal Plans are as similar to the regular menu
                  as
                  possible. We believe that even those who live off fast food will be satisfied with both the meals and
                  the
                  results, and never feel hungry.</p>
              </div>
            </slide>
            <slide>
              <div class="box__f6">
                <h2>?</h2>
                <h3>I don’t want to give my sweets!</h3>
                <p>And you don't have to. We know that it’s hard to get rid of the sweet tooth, and included sweet
                  dishes
                  into the meal plan. We’ve picked balanced sweets.</p>
              </div>
            </slide>
            <slide>
              <div class="box__f6">
                <h2>?</h2>
                <h3>Can I lose weight without working out?</h3>
                <p>Sure thing! Nutrition is the most important element in weight loss. However if you incorporate
                  workouts,
                  your body will get more toned and defined. We know it’s a lot to take on, and the workouts are
                  extremely
                  easy, suitable for first-timers, and will take up barely any time.</p>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
      <div class="finish-1">
        <div class="left__f__1">
          <h2>Start Losing Weight Right Now!</h2>
          <p>Join over 10,000,000 members of the BetterMe family</p>
          <a href="">
            <div class="button__f">
              Get My Plan
            </div>
          </a>
        </div>
        <div class="right__f__1">
          <img src="@/assets/img/f1.png" alt="">
        </div>
      </div>
      <div class="bottom-text-finish">
        <p><span>PLEASE NOTE</span>: After your 1-month introductory offer, unless you cancel online before the end of
          then-current period, your subscription will renew automatically and you will be charged $42.84, the full not
          discounted price each month before you cancel. Subscriptions renew automatically at the end of each period
          unless you cancel online in your profile. If you are unsure how to cancel, visit our Subscription Terms.
          Prepayment of total plan cost required. You will need an Android or iOS mobile phone to access the full
          version of the product. You may want to take a screenshot of this information and save it.</p>
      </div>
    </div>
    <TheNavbar v-if="navbar" @tapBurger="burgerActive"/>

  </div>
</template>
<script>
import TheHeader from "@/components/UI/TheHeader.vue";
import TheNavbar from "@/components/UI/TheNavbar.vue";
import {Carousel, Slide} from 'vue-carousel';

export default {
  components: {
    TheHeader, TheNavbar, Carousel, Slide
  },
  data() {
    return {
      // состояние меню
      navbar: false,
      isActive1: false,
      isActive2: true,
      isActive3: false,
      price: '42.84',
    }
  },
  methods: {
    // открываем и закрываем меню по клику на бургер
    burgerActive() {
      this.navbar = !this.navbar
    },
    tar1() {
      this.isActive1 = true,
        this.isActive2 = false,
        this.isActive3 = false,
        this.price = '14.28'
    },
    tar2() {
      this.isActive1 = false,
        this.isActive2 = true,
        this.isActive3 = false,
        this.price = '42.84'
    },
    tar3() {
      this.isActive1 = false,
        this.isActive2 = false,
        this.isActive3 = true,
        this.price = '71.41'
    },
  },
  mounted() {
    const mediaQuery = window.matchMedia("(min-width:1360px)");
    this.mobile = mediaQuery.matches;
    const listener = e => this.mobile = e.matches;
    mediaQuery.addListener(listener);
    this.$once('hook:beforeDestroy', () => mediaQuery.removeListener(listener));
  }
}
</script>
