<template>
  <div>
    <modal @closeModal="모달창열렸니=false" :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" /> <!-- :보낼이름="밑에있는이름"-->
    <div class="menu">
      <a v-for="(a, i) in 메뉴들" :key="i">{{a}}</a>
    </div>

    <discount />
    <Card @openModal="모달창열렸니=true; 누른거=$event " :원룸들="원룸들" :누른거="누른거" />
    <!-- <div v-for="(item, index) in 원룸들" :key="index">
      <img :src="item.image" class="roomimg">
      <h4 @click="모달창열렸니=true; 누른거=index">{{ item.title }}</h4>
      <p>{{item.price}}원</p>
    </div> -->
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
      누른거: 0,
      원룸들: data,
      모달창열렸니: false,
      신고수: [0, 0, 0],
      메뉴들: ["Home", "Shop", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
    };
  },
  methods: {

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

설마한번에 같이 푸쉬되는거임?