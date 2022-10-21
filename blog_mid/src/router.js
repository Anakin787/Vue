import { createWebHashHistory, createRouter } from "vue-router";
import list from './components/list.vue'
import home from './components/home.vue'
import detail from './components/detail.vue'
import Author from './components/Author.vue'

//위일수록 우선권 가진다
const routes = [
  {
    path: "/list",
    component: list, //위에서 import해야 첨부가능
  },
  {
    path: "/",
    component: home,
  },
  {
    path: "/detail/:id", //:작명 (+파라미터 정규식 첨부가능)
    component: detail,
    children: [ //특정 페이지 안에서 route를 나누고 싶을때 nested routes쓴다.
      {
        path: "Author",
        component: Author
      }
    ]
  }
];

//이게 메인
const router = createRouter({
  history: createWebHashHistory(), //Hash모드는 URL마지막에 /# 으로 끝나고 #뒤에있는 내용들은 절대 서버로 전달되지 않는다. 또한 vue router에서 온전히 처리하기때문에 서버가 라우팅을 채가는 일을 방지한다.
  routes,
});

export default router; 