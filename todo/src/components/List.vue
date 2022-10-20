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
    index: Number
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
  cursor: pointer;
  font-size: large;
  color: red;
  border: none;
  background: white;
}

.inputData {
  font-size: 1.5rem;
  width: 70%;
  margin: 0;
}

.del {
  font-size: 1.5rem;
  border: none;
  border-radius: 15px;
  background: darkorange;
  width: 10%;
  cursor: pointer;
  padding: 0;
}

.done {
  text-decoration: line-through;
  color: red;
}
</style>