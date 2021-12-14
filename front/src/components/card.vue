<template>
  <div class="outer">
    <router-link :to="'/pokemon?id=' + id">
      <div class="card">
        <div class="info">
          <div class="title">
            <h1>{{ name }}</h1>
            <h1 class="grey">#{{ id }}</h1>
          </div>
          <div class="type">
            <div class="dot" :class="[type1]"></div>
            <p>{{ type1 }}</p>
          </div>
          <div v-if="type2 !== undefined" class="type">
            <div class="dot" :class="[type2]"></div>
            <p>{{ type2 }}</p>
          </div>
        </div>
        <div class="image">
          <img :alt="[name]" :src="[image]">
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    image: String,
    id: Number,
    name: String,
    type1: String,
    type2: String,
  },
}
</script>

<style scoped>
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

p {
  margin: 0;
  font-family: "Montserrat SemiBold", sans-serif;
  color: grey;
}

.title {
  display: flex;
}

.grey {
  color: lightgray;
}

.type {
  background: white;
  display: flex;
  width: fit-content;
  border-radius: 100px;
  margin-bottom: 10px;
  padding: 4px 10px 4px 4px;
}

.dot {
  height: 20px;
  aspect-ratio: 1;
  border-radius: 100%;
  margin-right: 5px;
}

h1{
  font-family: "Montserrat SemiBold", sans-serif;
}

a {
  text-decoration: none;
  color: black;
}

.outer {
  box-sizing: border-box;
  padding: 6px;
  margin-bottom: 6px;
  width: 100%;
  height: 200px;
  transition: 0.5s;
}



.card {
  box-sizing: border-box;
  padding: 12px;
  border-radius: 20px;
  height: 100%;
  display: flex;
  background: #F1F1F1;
  justify-content: space-between;
}

.image {
  display: flex;
  align-items: center;
}
img {
  display: block;
  max-height: 120px;
  max-width: 120px;
  width: auto;
  height: auto;
}

@media (max-width: 114vh) {
  h1 {
    font-size: 20px;
  }
}
</style>