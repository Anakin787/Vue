<template>
  <!-- 남은사항
체크박스 체크시 complete값 제대로 변경(LS에 상태저장) + 가운뎃줄(LS에 상태저장)
개별삭제,선택삭제,진행도그래프 -->
  <div id="background">
    <div id="main">
      <div>
        <h4 id="title">To Do List</h4>
        <input type="text" v-model="Inputs" @keyup.enter="setData" class="input" placeholder="할일을 입력해 주세요" />
        <button :value="Inputs" @click="setData" class="addButton">+</button>
      </div>
      <hr style="border: 1px dashed black" />
      <List :loadData="loadData()[index]" v-for="(item, index) in loadData()"
        @cpl="loadData().complete=true;isChecked($event)" :key="index" />
    </div>
  </div>
</template> 

<script>
//input부분을 컴포넌트로 만들고 이점보다 데이터를 주고받을때의 복잡함 등 단점이 더 크다고 판단합니다.
//props로 보내면 자식컴포넌트에서는 Read-Only가 되기때문에 일반적으로 변경이 되지않고, 설령 Custom Event를 사용하더라도 코드가 더 복잡해지는 경우가 생겨 input부분은 컴포넌트로 사용하지 않았습니다.
//컴포넌트는 반복적인 구문이 올때 효과적이며 간결하게 보일수 있지만, '한번만 쓰이고 데이터를 양방향으로 보내는 블럭'에 사용하기에는 오히려 부적절(복잡해) 합니다.(강의보고 조금더 보충하자)
import List from "./components/List.vue";

export default {
  name: "App",
  data() {
    return {
      Inputs: "",
      todoList: [],
      get: [],
    };
  },
  components: {
    List,
  },
  methods: {
    loadData: function () {
      if (localStorage.getItem("list")) {
        this.get = JSON.parse(localStorage.getItem("list"));
        return this.get;
      }
    },
    setData: function () {
      if (this.Inputs == "") {
        alert("할일을 입력하세요.");
        return;
      }
      this.addData(this.Inputs);
      this.Inputs = "";
    },
    addData: function (inputText) {
      //새로고침후 입력시 LocalStorage에 덮어써지는 문제 해결
      if (this.get.length > 0) {  //get에 데이터가있으면 get에푸쉬
        this.get.push({
          id: new Date().toISOString(),
          data: inputText,
          complete: false,
        });
        localStorage.setItem("list", JSON.stringify(this.get));
      } else {
        this.todoList.push({
          id: new Date().toISOString(),
          data: inputText,
          complete: false,
        });
        localStorage.setItem("list", JSON.stringify(this.todoList));
      }
    },
    isChecked: function (event) { //10/19 집가서 코드정리 (클릭한거 p태그 줄긋기)
      const p = document.querySelector(".inputData");
      const target = this.loadData().map(function (D) {
        p.addEventListener("click", (e) => {
          e.target.classList.toggle("done")
          // target.complete = !target.complete;
          // localStorage.removeItemItem("list", JSON.stringify(this.loadData()));
          // localStorage.setItem("list", JSON.stringify(this.loadData()));
        });
      });
    },
  }
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
  display: inline-block;
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

.done {
  text-decoration: line-through;
}
</style>
