import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate, {
  errorBagName: 'vErrors',
  inject: false
})