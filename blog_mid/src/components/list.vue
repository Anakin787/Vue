<template>
  <div>
    <!-- route는 현재 URL에 관련된 정보 // router는 페이지이동 관련 정보 -->
    <div>
      <!-- router.push - router-link대신 쓸수있고 변수를 넣을수있다는 장점이 있다. -->
      <!-- 클릭하면 저 경로로 이동 -->
      <h4 @click="$router.push('./detail/0')">{{블로그글[0].title}}</h4>
      <p>{{블로그글[0].date}}</p>
    </div>
    <div>
      <h4>{{블로그글[1].title}}</h4>
      <p>{{블로그글[1].date}}</p>
    </div>
    <div>
      <h4>{{블로그글[2].title}}</h4>
      <p>{{블로그글[2].date}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    블로그글: Array,
  },
};
</script>

<style>

</style>