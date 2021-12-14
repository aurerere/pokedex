<template>
  <link rel="reconnect" href="https://fonts.googleapis.com">
  <link rel="reconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet">
  <div id="nav">
    <router-link to="/">
      <img class="logo" alt="Pokédex logo" src="./assets/logo.svg">
    </router-link>
    <router-link to="/me" v-if="loggedIn">
      <p>
        PROFILE
      </p>
    </router-link>
    <div class="buttons" v-if="!loggedIn">
      <router-link to="/login">
        <p-button Title="Login"></p-button>
      </router-link><space/>
      <router-link to="/register">
        <s-button Title="Register"></s-button>
      </router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
* {
  /*overflow-y: overlay;*/
}

*::-webkit-scrollbar {
  position: absolute;
  background: transparent;
  width: 8px;
}

*::-webkit-scrollbar-thumb {
  position: absolute;
  background: rgba(100, 100, 100, 0.5);
  border-radius: 100vh;
  margin-right: 1vh;
}

body {
  padding: 0;
  margin: 0;
}

#app {
  padding: 0;
  font-family: "Montserrat Regular", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  z-index: 100;
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background: white;
  align-items: center;
  -webkit-box-shadow: 0 0 50px 5px rgba(0,0,0,0.35);
  box-shadow: 0 0 50px 5px rgba(0,0,0,0.10);
  border-radius: 0 0 20px 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  font-family: "Montserrat SemiBold", sans-serif;
}

#nav a.router-link-exact-active > button {
  -webkit-box-shadow: 0 0 14px 2px rgba(255, 150, 150, 0.56);
  box-shadow: 0 0 14px 2px rgba(255, 150, 150, 0.56);
}

#nav a.router-link-exact-active {
  color: #FD3736;
}

.buttons {
  display: flex;
}

.logo {
  width: 120px;
}
</style>


<script>
const axios = require('axios');
import PButton from "./components/pButton";
import SButton from "./components/sButton";
import Space from "./components/Space";
export default {
  components: {Space, SButton, PButton},
  data() {
    return {
      loggedIn: false
    }
  },
  beforeMount() {
    console.log(window.location)
    if (window.localStorage.getItem('token')) this.loggedIn = true;
  }
}
</script>