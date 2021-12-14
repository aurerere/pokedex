<template>
  <div>
    <img alt="Sad pikachu - 404" src="../assets/404.png">
    <h1>
      404
    </h1>
    <p>
      Page not found
    </p>
  </div>
</template>

<script>
export default {
  name: "404"
}
</script>

<style scoped>
  p {

  }
  h1 {
    font-size: 120px;
    margin: 0;
  }
  img {
    max-height: 120px;
  }
  div {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>