<template>
  <div class="detail_wrapper">
    <detail-name :detailName="detailName"></detail-name>
    <detail-score :starNum="starNum" :score="score"></detail-score>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
    <detail-open-date-time :openDateTime="openDateTime"></detail-open-date-time>
    <detail-comment-key-word
      :commentKeyword="commentKeyword"
    ></detail-comment-key-word>
    <detail-service :service="service"></detail-service>
  </div>
</template>

<script>
import DetailName from "./Sub/Name";
import DetailScore from "./Sub/Score";
import DetailAddress from "./Sub/Address";
import DetailPrice from "./Sub/Price";
import DetailOpenDateTime from "./Sub/OpenDateTime";
import DetailCommentKeyWord from "./Sub/CommentKeyWord";
import DetailService from "./Sub/Service";

export default {
  name: "DetailMassage",
  components: {
    DetailName,
    DetailScore,
    DetailAddress,
    DetailPrice,
    DetailOpenDateTime,
    DetailCommentKeyWord,
    DetailService
  },
  props: {
    detailName: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number,
    openDateTime: String,
    commentKeyword: Array,
    service: Object
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss"></style>
