<template>
  <div class="iphone-game">
    <div class="iphone-game-box">
      <div class="iphone-1">
        <img src="./images/shouji1.png" alt="" />
        <div class="txt">
          <p>Stealth游戏的设计永远</p>
          <p>不会以同样 的方式进行。 随机的游戏</p>
          <p>组合让你的 头脑和核心猜测。</p>
        </div>
      </div>
      <div class="iphone-1">
        <img src="./images/shouji2.png" alt="" />
        <div class="txt">
          <p>Stealth游戏的设计永远</p>
          <p>不会以同样 的方式进行。 随机的游戏</p>
          <p>组合让你的 头脑和核心猜测。</p>
        </div>
      </div>
      <div class="iphone-1">
        <img src="./images/shouji3.png" alt="" />
        <div class="txt">
          <p>跟踪您的日常锻炼、游戏历史 </p>
          <p>和分数。在我们的实时全球排行榜中</p>
          <p>查看您与全球其他人的排名。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IphoneGame",
};
</script>

<style lang="less" scope>
.iphone-game {
  height: 1218px;
  background-color: #000000;
  padding-top: 83px;
  .iphone-game-box {
    width: 100%;
    display: flex;
    justify-content: space-around;
    .iphone-1 {
      width: 477px;
      height: 1082px;
      img {
        width: 100%;
        height: 949px;
      }
      .txt {
          margin-top: 43px;
        p {
          text-align: center;
          color: #ffffff;
          font-size: 24px;
          padding: 0 0 13px 0;
        }
      }
    }
  }
}
</style>