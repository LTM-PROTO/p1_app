<template>
  <div class="select">
    <div class="star-box">
      <h1>看看国际友人是如何评价Stealth的</h1>
      <div class="star">
        <div class="star-item">
          <ul>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
          </ul>
          <span>你的身体一直在等待什么</span>
          <p>
            这个产品很棒。它制作精良，即使每天只有1分钟，也能鼓励你保持运动打卡。它使平板支撑变得更有趣，你会收获
            很多。
          </p>
        </div>
        <div class="star-item">
          <ul>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
          </ul>
          <span>超级腹肌训练！！</span>
          <p>
            这东西让平板支撑变得有趣！这些游戏可以帮助你忘记平板支撑的难度！
          </p>
        </div>
        <div class="star-item">
          <ul>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
          </ul>
          <span>爱我的STEALTH ！！</span>
          <p>
            在手机上玩游戏时，可以看到结果并建 立核心力量！！我们都在手机上玩游戏，这有助于你在享受各种不同游戏的同时建立你的核心！我花过的最值得钱！
          </p>
        </div>
        <div class="star-item">
          <ul>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
          </ul>
          <span>游戏让时间过得更快！</span>
          <p>
            我喜欢玩游戏，因为玩游戏会让感觉时 间过的很快！这些游戏还迫使你更直接 地锻炼肌肉。但总的来说，我更喜欢的 是Stealth里面的玩家，他们都很了不起，也非常的支持我
          </p>
        </div>
        <div class="star-item">
          <ul>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
            <li><i>★</i></li>
          </ul>
          <span>很棒的核心教练！！</span>
          <p>
            太棒了！这些年来，我有几台健身器。 Stealth是最好的！游戏使运动变得有趣。绝对可以加强核心肌肉！产品支持非常 出色！！这是一个赢家
          </p>
        </div>
        
      </div>
    </div>
    <div class="nav-box">
      <h4>精选于</h4>
      <div class="img-box">
        <img src="./images/select.png" alt="" />
      </div>
      <div class="nav">
        <div class="nav-item">
          <p>
            STEALTH变运动 <br />
            变成一个有趣的游戏。
          </p>
        </div>
        <div class="nav-item">
          <p>
            Stealth Core Trainer太让人上瘾了，<br />
            你真的会期待你的锻炼。
          </p>
        </div>
        <div class="nav-item">
          <p>
            这个视频游戏腹肌锻炼让平板 <br />
            支撑方式更加有趣。<br />
            这项运动针对29块不同的肌肉，<br />
            包括你的腹肌、斜肌和背部。
          </p>
        </div>
        <div class="nav-item">
          <p>
            倾斜和扭转提供了比常规的<br />
            旧木板更具动态性的锻炼，<br />
            随机顺序确保没有<br />
            两次锻炼是相同的。
          </p>
        </div>
        <div class="nav-item">
          <p>
            所有这些扭转和转动使锻炼更有活力。<br />
            事实上，我们的编辑已经测试过它，<br />
            并说它可以帮助他们保持更长时间的 <br />
            平板支撑，而他们却没有意识到这一点
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarSelect",
};
</script>

<style lang="less" scope>
.select {
  height: 1092px;
  .star-box {
    h1 {
      text-align: center;
      font-size: 50px;
      margin: 126px 0;
    }
    .star {
      display: flex;
      justify-content: space-around;
      .star-item {
        padding: 16px 19px;
        box-sizing: border-box;
        width: 371px;
        height: 260px;
        // background-color: pink;
        border: 1px solid #efefef;
        ul {
          display: flex;
          margin: 0 0 26px 0;
          li {
            i {
              font-size: 28px;
              color: #ffb200;
            }
          }
        }
        span{
            font-size: 28px;
            display: block;
            margin-bottom: 12px;
            color:#333333;
        }
        p{
            font-size:20px;
            color:#5c5c5c;
            line-height: 30px;
        }
      }
    }
  }
  .nav-box {
    h4 {
      text-align: center;
      text-align: center;
      font-size: 50px;
      margin: 48px 0;
    }
    .img-box {
      width: 100%;
      height: 91px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .nav {
      display: flex;
      justify-content: space-around;
      padding-top: 50px;
      .nav-item {
        width: 371px;
        // height: 260px;
        // background-color: pink;
        p {
          text-align: center;
          line-height: 30px;
          font-size: 20px;
          color: #000000;
        }
      }
    }
  }
}
</style>