<template>
  <!-- 남은사항 : 진행도그래프 -->
  <div id="background">
    <div id="main">
      <div>
        <h4 id="title">To Do List</h4>
        <input type="text" v-model="Inputs" @keyup.enter="setData" class="input" placeholder="할일을 입력해 주세요" />
        <button :value="Inputs" @click="setData" class="addButton">+</button>
      </div>
      <hr style="border: 1px dashed black" />
      <List :loadData="loadData()[index]" @cpl="isChecked" @del="del" v-for="(item, index) in loadData()"
        :key="index" />
      <hr style="margin-top: 1rem;">
      <button class="delAll" @click="delAll">Delete All</button>
      <button class="delDone" @click="delDone">Delete Done</button>
    </div>
  </div>
</template>

<script>
//input부분을 컴포넌트로 만들고 이점보다 데이터를 주고받을때의 복잡함 등 단점이 더 크다고 판단합니다.
//props로 보내면 자식컴포넌트에서는 Read-Only가 되기때문에 일반적으로 변경이 되지않고, 설령 Custom Event를 사용하더라도 코드가 더 복잡해지는 경우가 생겨 input부분은 컴포넌트로 사용하지 않았습니다.
//컴포넌트는 반복적인 구문이 올때 효과적이며 간결하게 보일수 있지만, '한번만 쓰이고 데이터를 양방향으로 보내는 블럭'에 사용하기에는 오히려 부적절(복잡해) 합니다.
import List from "./components/List.vue";

export default {
  name: "App",
  data() {
    return {
      Inputs: "", //입력하는곳
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
    //입력데이터 저장
    setData: function () {
      if (this.Inputs == "") { //미입력시 alert
        alert("할일을 입력하세요.");
        return;
      }
      this.addData(this.Inputs);
      this.Inputs = ""; //입력후 입력창 초기화
    },
    addData: function (inputText) {
      this.get.push({
        id: new Date().toISOString(),
        data: inputText,
        complete: false,
      });
      localStorage.setItem("list", JSON.stringify(this.get));
    },

    //1번째(List.vue) : 클릭을 하면 해당된id를 보내서 isChecked파라미터로 전송한다.
    //2번째(isChecked) : loadData()에서 for문을쓰든 filter를쓰든 ★id를 비교하여 해당된것의 complete값을 반대로 바꾼후 localStorage에 다시 저장한다.
    //완료처리
    isChecked: function (id) {
      const checking = this.get.filter(C => C.id === id)[0]; //filter는 Array를 리턴한다! - 하나라도 첫번째 항목지정해야
      checking.complete = !checking.complete;
      localStorage.setItem("list", JSON.stringify(this.get));
      this.get = JSON.parse(localStorage.getItem('list')) //데이터를 다시 변수에 넣어야 실시간렌더링 됌 loadData가 리턴값을 가지는데 변수에다 함수를 실행하면 오류가나기때문에 그냥 this.get적음
    },
    //전체삭제
    delAll: function () {
      this.get = []
      localStorage.setItem("list", JSON.stringify(this.get))
      this.get = JSON.parse(localStorage.getItem('list'))
    },
    //체크된것 삭제
    delDone: function () {
      const arr = this.get.filter(C => C.complete !== true); //complete값 비교하여 false인것만 다시 담아서 저장
      localStorage.setItem("list", JSON.stringify(arr));
      this.get = JSON.parse(localStorage.getItem('list'))
    },
    //개별항목 삭제
    del: function (id) {
      const del = this.get.filter(C => C.id !== id); //선택한것과 다른 항목들만 다시 담아서 저장
      localStorage.setItem("list", JSON.stringify(del));
      this.get = JSON.parse(localStorage.getItem('list'))
    }
  },
};
</script>

<style>
body {
  margin: 0;
  text-align: center;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("./assets/back.jpg");
}

#background {
  width: 100%;
  height: 100%;
}

#main {
  width: 40%;
  height: 70%;
  display: inline-block;
  margin: auto;
  margin-top: 150px;
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

.addButton:hover {
  background: black;
  color: darkorange;
}

.delAll {
  width: 20%;
  height: 5%;
  font-size: large;
  border: none;
  border-radius: 15px;
  float: right;
  background: darkorange;
  margin-right: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.delAll:hover {
  background: black;
  color: darkorange;
}

.delDone {
  width: 25%;
  height: 5%;
  font-size: large;
  border: none;
  border-radius: 15px;
  float: right;
  background: darkorange;
  margin-right: 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
}

.delDone:hover {
  background: black;
  color: darkorange;
}

@media screen and (max-width: 1200px) {
  #main {
    width: 60%;
  }

  .delAll {
    width: 30%;
  }

  .delDone {
    width: 30%;
  }
}

@media screen and (max-width: 768px) {
  #title {
    font-size: 2rem;
  }

  .input.input::-webkit-input-placeholder {
    font-size: 1.5rem;
  }

  .delDone {
    width: 40%;
  }
}
</style>