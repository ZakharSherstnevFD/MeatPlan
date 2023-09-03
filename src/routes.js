import Vue from "vue";
import Router from 'vue-router'

Vue.use(Router)

import Home from './pages/TheStartPage.vue'
import WomanPage from './pages/woman/TheWomenStepPage.vue'
import WomanPageTest from './pages/woman/TheWomenTestPage.vue'
import WomanPageAnswer from './pages/woman/TheWomenAnswerPage.vue'
import WomanPageFinish from './pages/woman/TheWomenFinishPage.vue'
import ManPageFinish from './pages/man/TheManFinishPage.vue'
import ManPage from './pages/man/TheManStepPage.vue'
import ManPageTest from './pages/man/TheManTestPage.vue'
import ManPageAnswer from './pages/man/TheManAnswerPage.vue'
import Plan from './pages/ThePlanPage.vue'
import Finish from './pages/TheFinishPage.vue'
import FAQ from './pages/privacy/FAQ.vue'
import Terms from './pages/privacy/Terms.vue'
import NoteFound from './pages/TheNotFound.vue'
import Subscription from "@/pages/privacy/Subscription.vue";
import MoneyBack from "@/pages/privacy/MoneyBack.vue";
import Privacy from "@/pages/privacy/Privacy.vue";
import Contact from "@/pages/privacy/Contact.vue";


export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/faq',
      name: 'faq',
      component: FAQ,
    },
    {
      path: '/terms',
      name: 'terms',
      component: Terms,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: Privacy,
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: Subscription,
    },
    {
      path: '/moneyBack',
      name: 'moneyBack',
      component: MoneyBack,
    },
    {
      path: '/myPlan',
      name: 'finish',
      component: Finish,
    },
    {
      path: '/woman',
      name: 'woman',
      component: WomanPage,
    },
    {
      path: '/womanTest',
      name: 'womanTest',
      component: WomanPageTest,
    },
    {
      path: '/womanAnswer',
      name: 'womanAnswer',
      component: WomanPageAnswer,
    },
    {
      path: '/womanFinish',
      name: 'womanFinish',
      component: WomanPageFinish,
    },
    {
      path: '/manFinish',
      name: 'manFinish',
      component: ManPageFinish,
    },
    {
      path: '/man',
      name: 'man',
      component: ManPage,
    },
    {
      path: '/manTest',
      name: 'manTest',
      component: ManPageTest,
    },
    {
      path: '/manAnswer',
      name: 'manAnswer',
      component: ManPageAnswer,
    },
    {
      path: '/plan',
      name: 'plan',
      component: Plan,
    },
    {
      path: '*',
      name: 'noteFound',
      component: NoteFound,
    }
  ]
})
