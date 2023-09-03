<template>
  <div class="plan-wrapper">
    <div class="_container">
      <TheHeader @tapBurger="burgerActive"/>
      <div class="block-1">
        <div class="title__1">
          <h2>Your Personalized Weight Loss plan</h2>
        </div>
        <div class="content__1">
          <div class="top__c1">
            <img src="@/assets/img/planImg-1.png" alt="">
            <div class="box__text__1 box__text__1__1">
              <p>Breakfast</p>
              <span>460 kcal</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="210" height="56" viewBox="0 0 210 56" fill="none">
                <path d="M1 1C3.9999 14.5 18.6998 38.7 53.5 27.5C97.0003 13.5 146 -18 209 54.5" stroke="#252525"
                      stroke-width="2" stroke-linecap="round" stroke-dasharray="4 4"/>
              </svg>
            </div>
          </div>
          <div class="bottom__c1">
            <div class="box__text__1">
              <p>Lunch</p>
              <span>590 kcal</span>
            </div>
            <img src="@/assets/img/planImg-2.png" alt="">
          </div>
        </div>
      </div>
      <div class="block-2">
        <div class="title__2">
          <h3>Based on your answers you will be…</h3>
        </div>
        <div class="weight__2">
          <div>{{ weightDef1 }}</div>
          <div>{{ weightDef2 }}</div>
          <div class="wrapper__weight">{{ weight }} <span>kg</span></div>
          <div>{{ weightDef3 }}</div>
          <div>{{ weightDef4 }}</div>
        </div>
        <div class="title__bottom__2">
          <p>By November 2023</p>
        </div>
      </div>
      <div class="block-3">
        <div class="left__3">
          <div class="title__left">
            <h3>Long-lasting results with personal plan</h3>
          </div>
          <div class="content__3">
            <div class="content__ll__3">
              <div class="top__ll__3">
                <img src="@/assets/img/fire.png" alt="">
                <span>90%</span>
              </div>
              <div class="bottom__ll__3">
                <p>of people with similar profiles lost weight using BetterMe plans</p>
              </div>
            </div>
            <div class="content__lr__3">
              <img src="@/assets/img/atlet.png" alt="">
            </div>
          </div>
        </div>
        <div class="right__3">
          <div class="box__3__right__1">
            <div class="title__right__3">
              <p>Personal summary</p>
            </div>
            <div class="box__right__3">
              <div class="top__box__3">
                <div class="left__top__3">
                  <p>BMI</p>
                  <span>Your BMI</span>
                </div>
                <div class="right__top__3">
                  <div>
                    <span>overweight</span>
                  </div>
                </div>
              </div>
              <div class="bottom__box__3">
                <div id="Progress">
                  <div :style="slider" id="Bar"><span>{{ indexBody }}</span></div>
                </div>
                <div class="option__3">
                  <p>10</p>
                  <p>60</p>
                </div>
              </div>
            </div>
          </div>
          <div class="box__right__3">
            <div class="top__box__3">
              <div class="left__top__3">
                <p>Water</p>
                <span>Recommended Water</span>
              </div>
              <div class="right__top__3">
                <div>
                  <span>1.8 L</span>
                </div>
              </div>
            </div>
            <div class="bottom__box__3">
              <img src="@/assets/img/water.png" alt="">
            </div>
          </div>
          <div class="box__right__3">
            <div class="top__box__3">
              <div class="left__top__3">
                <p>Calories</p>
                <span>Recommended Daily</span>
              </div>
              <div class="right__top__3">
                <div>
                  <span>{{ calories }} CAL</span>
                </div>
              </div>
            </div>
            <div class="bottom__box__3">
              <div class="calories" id="Progress2">
                <div :style="slider" id="Bar2"><span>{{ calories }}</span></div>
              </div>
              <div class="option__3">
                <p>1000 CAL</p>
                <p>5000 CAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="button">
        <router-link to="/myPlan">
          <div style="" class="btn btn__plan">
            Get My Plan
          </div>
        </router-link>
      </div>
    </div>
    <TheModal v-if="modalFirst"
              @close="getPlan"
    ></TheModal>
      <TheNavbar v-if="navbar" @tapBurger="burgerActive"/>
  </div>
</template>
<script>
import TheHeader from "@/components/UI/TheHeader.vue";
import TheNavbar from "@/components/UI/TheNavbar.vue";
import TheModal from "@/components/UI/TheModal.vue";

export default {
  components: {
    TheModal,
    TheHeader, TheNavbar
  },
  data() {
    return {
      // выпадающее меню
      navbar: false,
      // данные из стора
      qwe: this.$store.getters.womanAnswer,
      // шаблон индекса массы тела
      indexBody: '',
      // шаблон длинны прокрутки ползунка
      slider: '',
      // шаблон количества каллорий
      calories: '',
      //шаблон веса
      weight: '',
      // шаблоны дефонлтных весов
      weightDef1: '',
      weightDef2: '',
      weightDef3: '',
      weightDef4: '',
      // состояние модалки
      modalFirst: true,
    }
  },
  methods: {
    // открытие меню по клику на бургер
    burgerActive() {
      this.navbar = !this.navbar
    },
    // после отправки формы с модалки
    getPlan() {
      //закрываем модалку
      this.modalFirst = false
      // получаем параметры веса и роста со страницы с формой заполнения этих параметров
      let params = this.$store.getters.womanAnswer.params;
      // подсчитываем индекс массы тела
      let index = (Number(params[2]) / Math.pow((Number(params[1]) / 100), 2)).toFixed(1)
      // записываем результат подсчета индекса массы тела в шаблон
      this.indexBody = index
      // записываем в шаблон положение ползунка индекса массы тела
      this.slider = `margin-left: ${index}%`
      // считаем рекомендуемую норму каллорий в сутки
      let calories = Math.round(Number(params[2]) / 0.45 * 8);
      // записываем в шаблон рекомендуемую норму каллорий в сутки
      this.calories = calories
      // записываем в шаблон вес
      this.weight = params[2]
      // записываем в шаблоны дефолтные веса
      this.weightDef1 = params[2] - 2
      this.weightDef2 = params[2] - 1
      this.weightDef3 = Number(params[2]) + 1
      this.weightDef4 = Number(params[2]) + 2
    },
  }
}
</script>


