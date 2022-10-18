<template>
  <div id="background">
    <div id="main">
      <div>
        <h4 id="title">To Do List</h4>
        <input
          v-model="Input"
          class="input"
          placeholder="할일을 입력해 주세요"
        />
        <!-- 버튼누르거나 엔터치면 추가 -->
        <button class="addButton">+</button>
      </div>
      <List />
    </div>
  </div>
</template>

<script>
//input 부분을 컴포넌트로 만들고 데이터를 props로 보낼때의 이점보다 데이터를 주고받을때의 복잡함 등 단점이 더 크다고 판단합니다.
//props로 보내면 자식컴포넌트에서는 Read-Only가 되기때문에 일반적으로 변경이 되지않고, 설령 Custom Event를 사용하면 되지만 코드가 더 복잡해지는 경우가 생겨 input은 컴포넌트로 사용하지 않았습니다.
//컴포넌트는 반복적인 구문이 올때 효과적이며 간결하게 보일수 있지만, '한번만 쓰이고 데이터를 양방향으로 보내는 블럭'에 사용하기에는 오히려 복잡해 집니다.(강의보고 조금더 보충하자)
import List from "./components/List.vue";

export default {
  name: "App",
  data() {
    return {
      Input: "",
    };
  },
  components: {
    List,
  },
};
</script>

<style>
body {
  margin: 0;
  text-align: center;
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
  font-size: 3rem;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
}
#title:hover {
  color: chocolate;
}

.input {
  width: 80%;
  font-size: 2rem;
  border: 2px solid black;
  border-radius: 5px;
  margin-bottom: 30px;
}

.input::-webkit-input-placeholder {
  text-align: center;
}

.addButton {
  font-size: 2rem;
  border: none;
  border-radius: 10px;
  margin-left: 5px;
  background: darkorange;
  cursor: pointer;
}
</style>
