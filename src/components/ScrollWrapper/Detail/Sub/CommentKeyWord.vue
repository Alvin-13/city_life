<template>
  <div class="comment_keyword_bd">
    <detail-title title="评论关键词" icon="icon-haoping"></detail-title>
    <div class="comment_keyword_content">
      <span
        class="keyword_item"
        v-for="(item, index) of commentKeyword"
        :key="index"
        >{{ item }}</span
      >
    </div>
  </div>
</template>

<script>
import DetailTitle from "./Title";

export default {
  name: "CommentKeyWord",
  components: {
    DetailTitle
  },
  props: {
    commentKeyword: Array
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
@import "~styles/variables.scss";
@import "~styles/mixins.scss";

.comment_keyword_bd {
  margin-top: 0.1rem;
  
  .comment_keyword_content {
    display: flex;
    flex-wrap: wrap;
    padding: 0.1rem 0.15rem;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;

    .keyword_item {
      @include flexCenter;
      height: 0.25rem;
      padding: 0 0.05rem;
      margin: 0 0.05rem 0.05rem 0;
      font-size: 0.14rem;
      color: $defaultGreen;
      border: 1px solid $defaultGreen;
      border-radius: 0.03rem;
    }
  }
}
</style>
