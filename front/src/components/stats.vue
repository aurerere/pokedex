<template>
  <div class="content">
    <h1>
      Stats
    </h1>
    <div>
      <p>🧬 HP</p>
      <p class="strong">{{ hp }}</p>
    </div>
    <div>
      <p>🗡️ Attack</p>
      <p class="strong">{{ attack }}</p>
    </div>
    <div>
      <p>⚔️ Special attack</p>
      <p class="strong">{{ specialAttack }}</p>
    </div>
    <div>
      <p>✋ Defense</p>
      <p class="strong">{{ defense }}</p>
    </div>
    <div>
      <p>🛡️ Special defence</p>
      <p class="strong">{{ specialDefence }}</p>
    </div>
    <div>
      <p>💨 Speed</p>
      <p class="strong">{{ specialDefence }}</p>
    </div>
  </div>
</template>

<script>
import Space from "./Space";
export default {
  name: "stats",
  components: {Space},
  props: {
    attack: Number,
    defense: Number,
    specialAttack: Number,
    specialDefence: Number,
    hp: Number,
    speed: Number
  }
}
</script>

<style scoped>
.content {
  /*padding: 20px;*/
  max-width: 95%;
}

h1 {
  font-size: 24px;
  font-family: "Montserrat SemiBold", sans-serif;
}

p {
  margin: 0;
}

.strong {
  font-family: "Montserrat SemiBold", sans-serif;
  margin-top: 10px;
}

.content div {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  background: #F2F2F2;
  /*width: fit-content;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
}

@media (max-width: 114vh) {
  .image {
    transform: translateY(10vh);
  }
  .dot {
    height: 10px;
  }
  .content {
    max-width: 100%;
  }
}
</style>