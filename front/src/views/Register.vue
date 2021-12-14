<template>
  <div class="container">
    <form @submit="formVerif()" method="post">
      <h1>
        Register
      </h1>
      <input type="text" v-model="username"
             placeholder="Username"
             autocomplete="off"
             spellcheck="false">
      <input type="text" v-model="email"
             placeholder="E-mail"
             autocomplete="off"
             spellcheck="false">
      <input type="password" v-model="password"
             placeholder="Password"
             autocomplete="off"
             spellcheck="false">
      <p class="error" v-if="error">{{ error }}</p>
      <p-button type="submit" Title="Register" arg="form"></p-button>
      <p>OR</p>
      <router-link to="/auth">
        <s-button arg="form" Title="Login"></s-button>
      </router-link>
    </form>
  </div>
</template>

<script>
import PButton from "../components/pButton";
const sha = require('js-sha256')
const axios = require('axios')
import validateEmail from "../main";
import SButton from "../components/sButton";
export default {
  name: "Register",
  components: {SButton, PButton},
  data() {
    return {
      username: '',
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    formVerif() {
      event.preventDefault();
      let us = this.username;
      let em = this.email;
      let pw = sha.sha256(this.password);
      //console.log(pw)
      if (this.username && this.email && this.password) {
        if (!validateEmail(this.email)) {
          this.error = 'Invalid E-mail or Password'
        }
        else {
          axios
              .post('http://localhost:444/register', {
                username: us,
                email: em,
                password: pw,
              })
              .then((response) => {
                if (response.status >= 200 && response.status < 300) {
                  window.localStorage.setItem('token', response.data.token);
                  window.localStorage.setItem('username', us);
                  window.localStorage.setItem('email', em);
                  window.localStorage.setItem('password', pw);
                  window.location.replace("../");
                }
                else {
                  this.error = 'Invalid E-mail or Password';
                }
              })
              .catch(() => {
                this.error = 'Invalid E-mail or Password';
              });
        }
      }
      else {
        this.error = 'Invalid E-mail or Password';
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: #FD3736;
}

h1 {
  font-family: "Montserrat SemiBold", sans-serif;
}

p {
  text-align: center;
}

.container {
  position: absolute;
  top: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
}

form {
  width: 300px;
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 20px;
  font-size: 18px;
  outline: none;
  padding: 12px;
  background: #F1F1F1;
  border-radius: 15px;
  border: 4px solid #F1F1F1;
  transition: 0.5s;
}

input:focus {
  border: 4px solid rgba(253, 55, 54, 0.2);
  transition: 0.5s;
}

button {
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
}
</style>