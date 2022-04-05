<template>
  <div class="ticket_info_bd">
    <detail-title title="购票信息" icon="icon-intro"></detail-title>
    <div class="content">{{ ticketInfo }}</div>
  </div>
</template>

<script>
import DetailTitle from "./Title";

export default {
  name: "TicketInfo",
  components: {
    DetailTitle
  },
  props: {
    ticketInfo: {
      type: String,
      default: "加载中..."
    }
  },
  data: () => ({}),
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.ticket_info_bd {
   margin-top: 0.1rem;
  min-height: 0.44rem;
  background: #fff;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;

  .content {
    padding: 0.1rem 0.15rem;
    font-size: 0.14rem;
    line-height: 0.18rem;
    text-indent: 2em;
    box-sizing: border-box;
  }
}
</style>
