<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <h4>안녕 {{ $store.state.name }} {{ $store.state.age }}</h4>
    <button @click="이름변경()">이름변경</button> <!-- ...mapMutations으로 축약사용 가능 -->
    <button @click="$store.commit('나이변경')">나이변경</button>
    <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">더보기버튼</button>


    <!-- :작명="데이터이름" -->
    <Container :data="피드" />
    <button @click="more">더보기</button>
    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import data from './data'
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'

axios.post()
export default {
  name: 'App',
  data() {
    return {
      피드: data,
    };
  },

  //컨테이너는 import하고 등록하고 갔다쓰면된다.
  components: {
    Container: Container
  },
  computed: {
    ...mapState(['name', 'age']), //vuex state한번에 꺼내 쓰려면
    ...mapState({ 내이름: 'name' }) //object형으로도 사용가능
  },
  methods: {
    ...mapMutations('setMore', '이름변경', '나이변경'),
    more: function () {
      axios.get('https://codingapple1.github.io/vue/more0.json')
        .then(a => {//요청 성공시 실행할 코드
          this.피드.push(a.data)
        })
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

ul {
  padding: 5px;
  list-style-type: none;
}

.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}

.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}

.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}

.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}

.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}

.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}

.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}

.inputfile {
  display: none;
}

.input-plus {
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
