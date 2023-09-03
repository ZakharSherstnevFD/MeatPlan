<template>
  <transition name="modal">
    <div class="modal__wrapper">
      <div class="_container">
        <div class="modal-content">
          <!-- header -->
          <div class="modal-header">
          <span class="modal-title"> Enter your email to learn how
            to lose weight with MealPlan </span>
          </div>

          <!-- body -->
          <div class="modal-body">
            <form @submit.prevent="val" action="">
              <p style="color: darkred; margin-bottom: 5px;" v-if="!$v.email.email"> Email is not correct! </p>
              <input @change="$v.email.$touch()" v-model="email" type="email" placeholder="Email">
              <button>Get My Plan</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import {email} from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      email: ''
    }
  },
  validations: {
    email: {
      email
    }
  },
  methods: {
    val() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss">
.modal-enter,
.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}

.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00, 00, 00, 0.48);

}

.modal-header {
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  padding-bottom: 40px;
  max-width: 420px;
  margin: 0 auto;
}

.modal-content {
  position: relative;
  max-width: 600px;
  padding: 45px 70px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  transition: all 0.2s ease;
  border-radius: 19px;
  z-index: 999;
  @media screen and (min-width: 900px) {
    min-width: 500px;
  }
}

.modal-body {
  text-align: center;
}

.modal-body form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.modal-body form input {
  width: 435px;
  height: 58px;
  border-radius: 67px;
  border: 1px solid #DBDBDB;
  padding-left: 20px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.modal-body form button {
  color: #FFF;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  border-radius: 33.5px;
  border: 1px solid #FFF;
  background: linear-gradient(273deg, #F44845 0%, #FF955E 100%);
  box-shadow: 0px 8px 22px 0px rgba(246, 90, 75, 0.42);
  width: 435px;
  height: 58px;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
