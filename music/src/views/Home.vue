<template>
  <div class="home">
    <router-view></router-view>
    <router-link to="/concerthall">音乐馆</router-link>
    <router-link to="/find">发现</router-link>
    <router-link to="/me">我的</router-link>
  </div>
</template>

<script>
export default {
  name: "concertHall",
  components: {}
};
</script>