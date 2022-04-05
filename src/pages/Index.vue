<template>
  <div class="container">
    {{ username }}
    <router-link :to="{name: 'Detail', param: '张三'}">tiao到woziji</router-link>

    <home-header></home-header>
    <home-scroll-wrapper></home-scroll-wrapper>
    
  </div>
</template>

<script>
import HomeHeader from "components/Header/HomeHeader";
import HomeScrollWrapper from "components/ScrollWrapper/HomeScrollWrapper";

export default {
  name: 'Index',
  components: {
    HomeHeader,
    HomeScrollWrapper
  },
  data: () => ({

  }),
  props: {
    username: String
  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped lang="scss">

</style>
