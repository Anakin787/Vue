<template>
  <div id="background">
    <div id="main">
      <Input :Input="Input" />
      <List />
    </div>
  </div>
</template>

<script>
import Input from "./components/Input.vue";
import List from "./components/List.vue";

export default {
  name: "App",
  data() {
    return {
      Input: "",
    }
  },
  components: {
    Input,
    List,
  },
};
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
</style>
