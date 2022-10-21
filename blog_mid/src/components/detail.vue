<template>
  <div>
    <!-- {{$route.params.id}} => 파라미터정보를 담고있다. 파라미터자리에 기입된거 알려줌  '$route.params.작명한거'-->
    <div class="container mt-4">
      <h4>{{블로그글[$route.params.id].title}}</h4>
      <p>{{블로그글[$route.params.id].content}}</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: {
    블로그글: Array,
  },
}
</script>

<style>

</style>