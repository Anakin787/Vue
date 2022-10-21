<template>
  <div>
    <div class="start" v-bind:class="{'end':모달창열렸니}">
      <modal @closeModal="모달창열렸니=false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" /> <!-- :보낼이름="밑에있는이름"-->
    </div>
    <div class="menu">
      <a v-for="(a, i) in 메뉴들" :key="i">{{a}}</a>
    </div>

    <discount :dc="dc" v-if="showDiscount==true" />

    <button @click="priceSort">가격순 정렬</button>
    <button @click="sortback">되돌리기</button>
    <Card @openModal="모달창열렸니=true; 누른거=$event " :원룸들="원룸들" :누른거="누른거" />
  </div>
</template>

<script>
/*
동적UI만드는 법
0.디자인 해두고
1.UI의 현재상태를 데이터로 저장해둠
2.데이터에 따라 UI가 어떻게 보일지 작성
*/

/*
컴포넌트 쓰는방법
1.import ~
2.component{}에 등록
3.<쓰셈/>
*/
/*
Props 쓰는방법 (Read-Only)
1.데이터보내고
2.props{}에 등록
3.<쓰셈/>
*/
import data from "./data.js";
import discount from "./components/Discount.vue"
import modal from "./components/Modal.vue"
import Card from "./components/Card.vue";

export default {
  name: "App",
  //data는 한곳에다가 보관함
  data() {
    return {
      dc: 10,
      showDiscount: true,
      원룸들오리지널: [...data], //spread Operator - 불변성
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      신고수: [0, 0, 0],
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {
    priceSort() {
      this.원룸들.sort(function (a, b) { //sort는 원본 보존x map,filter는 보존o
        return a.price - b.price //양수면 a를 오른쪽으로
      })
    },
    sortback() {
      this.원룸들 = [...this.원룸들오리지널]
    }
  },
  mounted() { // App.vue가 mount되고나서 실행
    setInterval(() => {
      if (this.dc == 1) {
        this.showDiscount = false
      }
      this.dc -= 1
    }, 1000)
  },
  components: {
    discount: discount,
    modal,
    Card
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

.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

.roomimg {
  width: 100%;
  max-width: 800px;
  margin-top: 40px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}
</style>