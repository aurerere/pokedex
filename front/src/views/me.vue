<template>
  <section :class="bgType">
    <div class="image">
      <img :alt="pokemon.name" :src="pokemon.image">
    </div>
    <div class="container">
      <div class="margins">
        <div class="contained">
          <div class="name-type">
            <h1>{{ pokemon.name }}</h1>
            <h1 class="grey">#{{ pokemon.id }}</h1>
          </div>
          <div class="flex">
            <div class="type">
              <div class="dot" :class="bgType"></div>
              <p>{{ pokemon.types[0] }}</p>
            </div>
            <div v-if="pokemon.types[1] !== undefined" class="type">
              <div class="dot" :class="[pokemon.types[1]]"></div>
              <p>{{ pokemon.types[1] }}</p>
            </div>
          </div>
        </div>
        <div class="stats">
          <stats
              :attack="pokemon.stats['attack']"
              :defense="pokemon.stats.defense"
              :special-attack="pokemon.stats['sp_attack']"
              :hp="pokemon.stats.hp"
              :special-defence="pokemon.stats['sp_defense']"
              :speed="pokemon.stats['speed']"
          />
          <efficiencies :types="pokemon['efficiencies']"/>
        </div>
      </div>
    </div>
    <p-footer/>
  </section>
</template>

<script>
import card from "../components/card";
import PFooter from "../components/pFooter";
import {loggedIn} from "../main";
const axios = require('axios');

export default {
  name: "me",
  components: {PFooter, card},
  data() {
    return {
      id: 0,
      pokemon: [],
      bgType: '',
      typeZero: 'none',
    }
  },
  beforeMount() {
    loggedIn()
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    if (!id) window.location.replace('../')
    axios
      .get(`http://localhost:444/team`)
      .then((result) => {
        this.pokemon = result.data.pokemon[0];
        this.bgType = result.data.pokemon[0].types[0];
      });
  },
  methods() {

  }
}
</script>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}

.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  margin-bottom: 100px;
}

p {
  font-family: "Montserrat SemiBold", sans-serif;
  margin: 0;
}

h1 {
  font-family: "Montserrat SemiBold", sans-serif;
  font-size: 40px;
  color: black;
  margin: 0;
}

.grey {
  color: lightgray;
}

.name-type {
  display: flex;
  align-items: center;
}

.image {
  margin-top: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translateY(50px);
}
img {
  display: block;
  max-height: 300px;
  max-width: 300px;
  width: auto;
  height: auto;
}

section {
  position: absolute;
  box-sizing: border-box;
  top: 0;
  width: 100%;
  min-height: 101vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.margins {
  width: 90%;
  padding-top: 60px;
}

.container {
  border-radius: 50px 50px 0 0;
  min-height: 50vh;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
}

.contained {
  display: flex;
  align-items: center;
}

.bug{background: #91C02B}
.dragon{background: #026EC6}
.electric{background: #F4D339}
.fairy{background: #EC90E7}
.fighting{background: #CF3F6B}
.fire{background: #FF9E54}
.flying{background: #90AADF}
.ghost{background: #5169AD}
.grass{background: #65BE5C}
.ground{background: #DB7B46}
.ice{background: #74CFC1}
.normal{background: #929BA3}
.poison{background: #AB6BC9}
.psychic{background: #FA727A}
.rock{background: #C6B88D}
.steel{background: #5C94A9}
.water{background: #4F91D7}
.dark{background: #040412}

.type {
  margin-left: 10px;
  background: lightgray;
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  border-radius: 100px;
  padding: 4px 10px 4px 4px;
}

.dot {
  height: 20px;
  aspect-ratio: 1;
  border-radius: 100%;
  margin-right: 5px;
}

@media (max-width: 114vh) {
  .stats {
    grid-template-columns: 1fr;
  }
  .image {
    transform: translateY(50px);
  }
  .contained {
    display: block;
  }
  .type {
    margin-top: 10px;
    margin-left: 0;
    margin-right: 10px;
  }
  .margins {
    padding-top: 70px;
  }
}
</style>