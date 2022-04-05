<template>
  <div class="search_input_bd">
    <div class="input_wrapper">
      <span class="iconfont icon-header-search"></span>
      <input class="input" type="text" v-model="keyword" :placeholder="placeholder" @input="onSearch" />
    </div>
  </div>
</template>

<script>
import { SearchModel } from "models/search";
import { mapState } from 'vuex';
import tool from "utils/tool"


export default {
  name: "SearchInput",
  components: {},
  props: {},
  computed: {
    ...mapState(["cityId"])
  },
  data: () => ({
    keyword: "",
    placeholder: "美食 / 景点 / 酒店 / 按摩 / KTV"
  }),
  mounted() {},
  methods: {
    onSearch: tool.throttle(function() {
      const keyword = tool.trimSpace(this.keyword);
      
      if(keyword.length <= 0) {
        this.$emit("onSearch", {});
        return;
      }
      const searchModel = new SearchModel();
      searchModel.searchAction(this.keyword, this.cityId).then(res => {
        this.$emit("onSearch", res);
      });
    }, 1000) 
  }
};
</script>

<style scoped lang="scss">
@import "~styles/mixins.scss";

.search_input_bd {
  height: 0.44rem;
  padding: 0.06rem 0.15rem;
  background-color: #fff;
  box-sizing: border-box;

  .input_wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .iconfont {
      @include centerTB;
      padding: 0 0.08rem;
      font-size: 0.16rem;
    }

    .input {
      width: 100%;
      height: 100%;
      font-size: 0.14rem;
      border: 1px solid #ddd;
      border-radius: 0.03rem;
      box-sizing: border-box;
      text-indent: 0.32rem;
    }
  }
}
</style>
