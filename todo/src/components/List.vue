<template>
  <div>
    <div id="todo-list">
      <button @click="$emit('cpl',loadData.id)" class="checked">✔️</button>
      <p class="inputData" v-bind:class="{done:loadData.complete}">{{loadData.data}}</p>
      <button class="del">X</button><br />
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
    loadData: Array
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
  flex-grow: 1;
  cursor: pointer;
  font-size: large;
  color: red;
  border: none;
  background: white;
}

.inputData {
  font-size: 1.5rem;
  flex-grow: 7;
  margin: 0;
}

.del {
  font-size: 1.5rem;
  border: none;
  border-radius: 15px;
  background: darkorange;
  flex-grow: 1;
  cursor: pointer;
  padding: 0;
}
.done {
  text-decoration: line-through;
}
</style>