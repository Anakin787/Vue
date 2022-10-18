<template>
  <hr style="border:1px dashed black"/>
  <div class="list">
    <input class="checkbox" type="checkbox" />
    <p class="inputData">input에서 받은 데이터</p>
    <button class="del">X</button><br />
  </div>
</template>

<script>
export default {
  name: "List",
};
</script>

<style>
.list {
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