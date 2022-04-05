<template>
  <div class="detail_wrapper">
    <detail-name :detailName="detailName"></detail-name>
    <detail-score :starNum="starNum" :score="score"></detail-score>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :openDateTime="openDateTime"></detail-open-date-time>
    <detail-recom :recom="recom"></detail-recom>
    <detail-comment-key-word :commentKeyword="commentKeyword"></detail-comment-key-word>
  </div>
</template>

<script>
import DetailName from "./Sub/Name";
import DetailScore from "./Sub/Score";
import DetailAddress from "./Sub/Address";
import DetailPrice from "./Sub/Price";
import DetailOpenDateTime from "./Sub/OpenDateTime";
import DetailRecom from "./Sub/Recom";
import DetailCommentKeyWord from "./Sub/CommentKeyWord";

export default {
  name: "DetailFood",
  components: {
    DetailName,
    DetailScore,
    DetailAddress,
    DetailPrice,
    DetailOpenDateTime,
    DetailRecom,
    DetailCommentKeyWord
  },
  props: {
    detailName: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    openDateTime: String,
    recom: String,
    commentKeyword: Array
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
