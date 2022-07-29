<template>
  <div class="code-box">
    <div class="q">
      <img src="./images/QRcode1.png" alt="" />
      <span>微信关注享乐客公众号</span>
    </div>
    <div class="q">
      <img src="./images/QRcode2.png" alt="" />
      <span>扫描下载STEALTH</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "QRCode",
};
</script>

<style lang="less" scope>
.code-box {
  height: 827px;
  background: url(./images/code_bj.png) no-repeat 100% 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 230px;

  .q {
    display: flex;
    flex-direction: column;

    img {
      width: 463px;
      height: 464px;
    }
    span {
      margin-top: 40px;
      font-size: 44.87px;
      text-align: center;
    }
  }
}
</style>