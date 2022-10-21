<template>
  <div>
    <div id="todo-list">
      <button @click="$emit('cpl',loadData.id)" class="checked">✔️</button>
      <p class="inputData" v-bind:class="{'done':loadData.complete}">{{loadData.data}}</p>
      <button @click="$emit('del',loadData.id)" class="del">X</button><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
    }
  },
  props: {
    loadData: Object,
  },
  methods: {

  }
};
</script>

<style>
#todo-list {
  display: flex;
  width: 80%;
  margin: auto;
  margin-top: 20px;
}

.checked {
  width: 15%;
  height: 5%;
  margin: auto;
  cursor: pointer;
  font-size: large;
  background-color: transparent;
  ;
  border: none;
  background: white;
}

.inputData {
  font-size: 1.5rem;
  width: 70%;
  height: 10%;
  margin: 0;
}

.del {
  width: 10%;
  height: 5%;
  margin: auto;
  font-size: 1.5rem;
  border: none;
  border-radius: 15px;
  background: darkorange;
  cursor: pointer;
  padding: 0;
}

.del:hover {
  background: black;
  color: darkorange;
}

.done {
  text-decoration: line-through;
  color: red;
}
</style>