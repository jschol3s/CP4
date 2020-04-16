import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  messageList: [{
    name: '',
    email: '',
    message: ''
  }],
  sendMessage(name, email, message) {
    this.messageList.push({
      name: name,
      email: email,
      message: message,
    });
  }
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')