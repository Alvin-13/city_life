<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @onSearch="onSearch"></search-input>
    <search-scroll-wrapper :data="data"></search-scroll-wrapper>
  </div>
</template>

<script>
import tool from "utils/tool"

import CommonHeader from "components/Header/CommonHeader";
import SearchInput from "components/SearchInput/SearchInput";
import SearchScrollWrapper from "components/ScrollWrapper/SearchScrollWrapper";

export default {
  name: "Search",
  components: {
    CommonHeader,
    SearchInput,
    SearchScrollWrapper
  },
  data: () => ({
    title: "商家搜索",
    data: {}
  }),
  mounted() {},
  methods: {
    onSearch(res) {
      if(res && res.status === 0) {
        const data = res.data;
        data.foodDatas && (data.foodDatas = tool.formatJSON(data.foodDatas, "keyword"));

        this.data = data
      } else {
        this.data = res;
        console.error(this.data);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.search {
}
</style>
