<template>
  <div class="score_bd">
    <span class="iconfont icon-smile"></span>
    <stars :starNum="starNum"></stars>
    <span class="text">{{score}}分</span>
  </div>
</template>

<script>
import Stars from "../../Common/Stars"

export default {
  name: 'DetailScore',
  components: {
    Stars
  },
  props: {
    starNum: {
      type: Number,
      default: 0
    },
    score: {
      type: String,
      default: "0.0"
    }
  },
  data: () => ({

  }),
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped lang="scss">
@import '~styles/variables.scss';

.score_bd {
  display: flex;
  height: .44rem;
  padding: .03rem .15rem 0;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .iconfont {
    font-size: .18rem;
    color: #999;
		margin: .08rem .1rem 0 0;
  }

  .text {
    font-size: .16rem;
    margin: .1rem 0 0 .15rem;
    color: $defaultOrange;
  }
}
</style>
