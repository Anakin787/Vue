<template>
  <div>
    <div id="todo-list">
      <input v-model="state" class="checkbox" type="checkbox" />
      <p class="inputData">{{loadData.data}}</p>
      <button class="del" @click="$emit('tog')">X</button><br />
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      state: false
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

.checkbox {
  flex-grow: 1;
  cursor: pointer;
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
</style>