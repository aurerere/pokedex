<template>
  <div class="content">
    <div class="margins">
      <div class="home-outer">
        <div class="search">
          <input
              v-model="search"
              v-on:input="get(search)"
              placeholder="Search a pokemon..."
              autocomplete="off"
              spellcheck="false"
          />
          <div class="icon">
            🔎
          </div>
        </div>
      </div>
      <div class="result" v-if="pokemon.length !== 0">
        <card v-for="temp in pokemon"
              :image="temp.image"
              :id="temp.id"
              :name="temp.name"
              :type1="temp.types[0]"
              :type2="temp.types[1]"
        />
      </div>
      <div class="no-result" v-if="pokemon.length === 0">
        <img class="sad" src="../assets/404.png" alt="sad pikachu">
        <h1>No matching result :'(</h1>
      </div>
    </div>
    <p-footer></p-footer>
  </div>
</template>

<script>
import Card from "../components/card";
import PFooter from "../components/pFooter";
const axios = require('axios');
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    PFooter,
    Card
  },
  data() {
    return {
      pokemon: [],
      search: '',
    }
  },
  methods: {
    get(value) {
      if (value.trim() === '') {
        axios
            .get(`http://localhost:444/pokemon/`)
            .then(result => this.pokemon = result.data.pokemon)
      }
      else {
        axios
            .get(`http://localhost:444/pokemon/search/${value}`)
            .then(result => {
              this.pokemon = result.data.pokemon;
            });
      }
    }
  },
  beforeMount() {
    this.get('');
  },
}
</script>

<style scoped>
img.sad {
  height: 150px;
}

.no-result {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.home-outer {
  width: 100%;
  box-sizing: border-box;
  padding: 6px;
}

.result {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.margins {
  min-height: 100vh;
  width: 90%;
  margin-bottom: 100px;
}

.search {
  box-sizing: border-box;
  border-radius: 15px;
  padding: 6px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background: #F1F1F1;
  border: 4px solid #F1F1F1;
  transition: 0.5s;
}

.search:focus-within {
  border: 4px solid rgba(253, 55, 54, 0.2);
  transition: 0.5s;
}

.icon {
  width: 50px;
  padding: 8px;
  font-size: 20px;
  background: #FD3736;
  border-radius: 12px;
  transition: 0.5s;
}

.icon:hover {
  cursor: pointer;
  -webkit-box-shadow: 0 0 14px 2px rgba(253, 55,54, 0.56);
  box-shadow: 0 0 14px 2px rgba(253, 55, 54, 0.56);
  transition: 0.5s;
}

.content {
  width: 100%;
  z-index: 0;
  position: absolute;
  box-sizing: border-box;
  top: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

input {
  padding: 6px;
  font-family: "Montserrat Regular", sans-serif;
  margin: 0;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  background: none;
}
@media (max-width: 226vh) {
  .result {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 170vh) {
  .result {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 114vh) {
  .result {
    grid-template-columns: 1fr;
  }
}
</style>
