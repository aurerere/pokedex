<template>
  <button :class="arg">{{ Title }}</button>
</template>

<script>
export default {
  name: "pButton",
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
  font-size: 15px;
  padding: 10px;
  border-radius: 12px;
  color: white;
  background: #FD3736;
  transition: 0.5s;
}

button:hover {
  transition: 0.5s;
  cursor: pointer;
  -webkit-box-shadow: 0 0 14px 2px rgba(253, 55,54, 0.56);
  box-shadow: 0 0 14px 2px rgba(253, 55, 54, 0.56);
}

.form {
  -webkit-box-shadow: 0 0 14px 2px rgba(253, 55,54, 0.56);
  box-shadow: 0 0 14px 2px rgba(253, 55, 54, 0.56);
  width: 100%;
  font-size: 18px;
}

</style>