<template>
  <div id="background">
    <div id="main">
      <h4 id="title">To Do List</h4>
      <Input />
    </div>
  </div>
</template>

<script>
import Input from "./components/Input.vue"

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    Input,
  }
}
</script>

<style>
body {
  margin: 0;
  text-align: center;
}

div {
  box-sizing: border-box;
}

#background {
  width: 100%;
  height: 100vh;
  position: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url("./assets/back.jpg");
}

#main {
  width: 40%;
  height: 50%;
  margin: auto;
  margin-top: 250px;
  border: 2px solid black;
  border-radius: 15px;
  background: white;
}

#title {
  font-size: 2rem;
}

#title:hover {
  color: chocolate;
}
</style>
