<template>
<div class="contact-section">
  <div class="content">
    <h2 class="content-head is-center">Got a question?</h2>
  </div>
  <div class="pure-g">
    <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
      <h4>Contact Us</h4>
      <p>
        Feel free to reach out, we're happy to help. <br>
        We are based in Utah, and we are a family business. <br>
        We are happy to answer any questions you might have, and we appreciate any feedback. <br>
        We will get back to you shortly!
      </p>
    </div>

    <div class="l-box-lrg pure-u-1 pure-u-md-2-5">
      <form class="pure-form pure-form-stacked" v-if='creating' @submit.prevent='sendMessage'>
        <fieldset>

          <label for="name">Your Name</label>
          <input v-model="name" type="text" placeholder="Your Name">


          <label for="email">Your Email</label>
          <input v-model="email" type="email" placeholder="Your Email">

          <label for="message">Your Message</label>
          <input v-model="message" type="text" placeholder="Your Message">

          <button @click="sendMessage(name, email, message)" type="submit" class="pure-button">Send</button>
        </fieldset>
      </form>
      <div v-else>
        <h3>Thanks for the message!</h3>
        <p>We will get back to you soon.</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'create',
  data() {
    return {
      creating: true,
      name: '',
      email: '',
      message: '',
    }
  },
  methods: {
    toggleForm() {
      this.creating = !this.creating;
    },
    async sendMessage() {
      //try {
      await axios.post('/api/messages', {
        name: this.name,
        email: this.email,
        message: this.message,
      });
      this.creating = false;
      //} catch (error) {
      //console.log(error);
      //}
    }
  }
}
</script>


<style scoped>
.content {
  background-color: #cfd8d7;
  margin: 2em;
}

.content h2 {
  padding: 5px;
}

.pure-g {
  margin-left: 3em;
}

.content-section {
  color: #93a8ac;
}

.l-box-lrg {
  margin: 2em;
}

.pure-form label {
  margin: 1em 0 0;
  font-weight: bold;
  font-size: 100%;
}

.pure-form input[type] {
  border: 2px solid #ddd;
  box-shadow: none;
  font-size: 100%;
  width: 100%;
  margin-bottom: 1em;
}
</style>
