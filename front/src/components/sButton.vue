<template>
  <button :class="arg">{{ Title }}</button>
</template>

<script>
export default {
  name: "sButton",
  props: {
    Title: String,
    arg: String
  }
}
</script>

<style scoped>
button {
  font-family: "Montserrat SemiBold", sans-serif;
  outline: none;
  border: none;
  padding: 10px;
  font-size: 15px;
  border-radius: 12px;
  color: #FD3736;
  background: #FFD5D5;
  transition: 0.5s;
}

button:hover {
  transition: 0.5s;
  cursor: pointer;
  -webkit-box-shadow: 0 0 14px 2px rgba(255, 150, 150, 0.56);
  box-shadow: 0 0 14px 2px rgba(255, 150, 150, 0.56);
}

.form {
  width: 100%;
  font-size: 18px;
}
</style>