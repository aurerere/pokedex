<template>
  <div class="content">
    <h1>
      Defense
    </h1>
    <div class="efficiency" v-for="temp in properties">
      <div class="type" v-if="types[temp] !== 1 && types[temp] < 2">
        <div class="dot" :class="temp"></div>
        <p>{{ temp }} - x{{ types[temp] }}</p>
      </div>
      <div class="bar" v-if="types[temp] !== 1 && types[temp] < 2">
        <div class="status" :class="toCSS[types[temp]]"></div>
      </div>
    </div>
    <h1>
      Weaknesses
    </h1>
    <div class="efficiency" v-for="temp in properties">
      <div class="type full-br" v-if="types[temp] >= 2">
        <div class="dot" :class="temp"></div>
        <p class="red">{{ temp }} - x{{ types[temp] }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "efficiencies",
  data() {
    return {
      toCSS: {
        0.5: 'ok',
        0.25: 'pretty-nice',
        0: 'nice'
      },
      properties: []
    }
  },
  props: {
    types: Object
  },
  beforeMount() {
    for (let property in this.types) {
      this.properties.push(property)
    }
  }
}
</script>

<style scoped>

h1 {
  font-size: 24px;
  font-family: "Montserrat SemiBold", sans-serif;
}

.efficiency {
  margin-bottom: 15px;
}

.content {
  box-sizing: border-box;
  max-width: 100%;
  /*padding: 20px;*/
}
.bar {
  height: 6px;
  width: 100%;
  display: flex;
  background: #F2F2F2;
  border-radius: 100px;
}
.ok {
  background: #FF9E54;
  width: 50%;
  height: 100%;
  border-radius: 100px;
}
.nice {
  background: #65BE5C;
  width: 100%;
  height: 100%;
  border-radius: 100px;
}
.pretty-nice {
  background: #F4D339;
  width: 75%;
  height: 100%;
  border-radius: 100px;
}

p {
  font-family: "Montserrat Regular", sans-serif;
  margin: 0;
}

.red {
  color: red;
  font-family: "Montserrat SemiBold", sans-serif;
}

.bug{background: #91C02B}
.dragon{background: #026EC6}
.electric{background: #F4D339}
.fairy{background: #EC90E7}
.fight{background: #CF3F6B}
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
  border-radius: 12px 12px 0 0;
  padding: 4px 10px 4px 4px;
  background: #F2F2F2;
  width: fit-content;
  display: flex;
  align-items: center;
}

.dot {
  height: 20px;
  aspect-ratio: 1;
  border-radius: 100%;
  margin-right: 5px;
}

.full-br {
  border-radius: 100px;
}

@media (max-width: 114vh) {
  .content {
    max-width: 100%;
  }
}
</style>