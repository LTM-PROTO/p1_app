<template>
  <div class="muscle">
    <div class="footer-nav">
      <img src="./images/WZNav.png" alt="" />
    </div>
    <div class="muscle-m">
      <h4>锻炼29块核心肌肉</h4>
      <p class="text">
        这个核心锻炼游戏让平板支撑变得更有趣，运动通过扭转，倾斜和360度转动，锻炼你的29块核心肌肉，包括你的腹肌，倾斜肌和腰背部
      </p>
      <p class="text-2">——《SHAPE》杂志</p>
    </div>
    <div class="muscle-img">
      <img src="./images/muscle.png" alt="" />
    </div>
    <ul class="games">
      <li><img src="./images/games_01.png" alt="" /></li>
      <li class="bj"><img src="./images/games_02.png" alt="" /></li>
      <li><img src="./images/games_03.png" alt="" /></li>
    </ul>
    <div class="muscle-m">
      <h4>相信我们，你甚至会忘记自己在锻炼</h4>
      <p class="text">
        “通过倾斜和扭转的动作，提供比普通平板支撑更灵活的锻炼，随机的排序确保锻炼内容不同。”
      </p>
      <p class="text-2">——《GQ》杂志</p>
    </div>
    <div class="gif">
      <img src="./images/JIF.png" alt="" />
    </div>
    <div class="muscle-m">
      <h4>体验更新更有趣的运动方式</h4>
      <p class="text">“STEALTH把锻炼变成了一种有趣的游戏。”</p>
      <p class="text-2">——《SPORTS ILLUSTRATED》杂志</p>
    </div>
    <div class="game-video-box">
      <div class="flex-box">
        <div class="game-video">
          <video controls id="game-v">
            <!-- <source src="./video/gamevideo.mp4" type="video/mp4" /> -->
          </video>
        </div>
        <div class="game-item">
          <ul>
            <li><img src="./images/gameitem01.png" alt="" /></li>
            <li><img src="./images/gameitem02.png" alt="" /></li>
            <li><img src="./images/gameitem03.png" alt="" /></li>
            <li><img src="./images/gameitem04.png" alt="" /></li>
            <li><img src="./images/gameitem05.png" alt="" /></li>
            <li><img src="./images/gameitem06.png" alt="" /></li>
          </ul>
        </div>
      </div>
      <p>APP提供4款免费游戏，如需获得更多游戏，请订购会员</p>
    </div>
    <div class="muscle-m">
      <h4>同样是训练核心力量何不选择STEALTH</h4>
      <p class="text">
        “Stealth Core Trainer
        被参与者评为最令人愉快的，用更少的力气，同时引发最大的肌肉活动。”
      </p>
      <p class="text-2">
        ——《宾夕法尼亚大学运动技能学教授金格.S.戈茨查尔.博士》
      </p>
    </div>
    <div class="data-table-box">
      <div class="img-box">
        <img src="./images/dataTable.png" alt="" />
      </div>
      <button class="btn">查看资料请下载PDF/点击查看<i></i></button>
    </div>
    <div class="muscle-m">
      <h4>STEALTH健腹板</h4>
      <p class="text">“太让人上瘾了，你真的会期待你的锻炼。”</p>
      <p class="text-2">——《HEALTH》杂志</p>
    </div>
    <div class="com">
      <div class="com-img">
        <img src="./images/com.png" alt="" />
      </div>
    </div>
    <div class="muscle-m">
      <h4>趣味 丰富 激励</h4>
      <p class="text">多款游戏增加运动的乐趣；和全国各地的爱好者一起挑战，健身内容更丰富；实时追踪运动记录，不断激励自己。</p>
      <p class="text-2">——《HEALTH》杂志</p>
    </div>
    <div class="iphone-game">
        
    </div>
  </div>
</template>

<script>
export default {
  name: "MuscleGroup",
};
</script>

<style lang="less" scoped>
@import "@/assets/css/pcstyle.css";
.muscle {
  //   overflow:hidden;
  position: relative;
  .footer-nav {
    //   width: 1120px;
    background-color: #000;
    img {
      width: 1120px;
      height: 149px;
      margin: 0 auto;
      display: block;
    }
  }
  .muscle-m {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 68px 0 48px;
    h4 {
      font-size: 50px;
      color: #333333;
    }
    .text {
      margin: 30px 0;
      font-size: 24px;
      color: #7b7b7b;
    }
    .text-2 {
      font-size: 24px;
      color: #4b6dc5;
    }
  }
  .muscle-img {
    width: 100%;
    height: 800px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .games {
    position: absolute;
    // width: 475px;
    top: 390px;
    // bottom: 0;
    left: 107px;
    // right: 0;
    .bj {
      margin: 29px 0;
    }
    li {
      width: 475px;
      height: 274px;
      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
      }
    }
  }
  .gif {
    width: 991px;
    height: 991px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
  }
  .game-video-box {
    width: 100%;
    height: 975px;
    background-color: #f7f7f7;
    .flex-box {
      display: flex;
      .game-video {
        width: 946px;
        height: 702.5px;
        background-color: #000;
        margin: 72px 34px 0 72px;
        #game-v {
          width: 946px;
          height: 702.5px;
        }
      }
      .game-item {
        margin-top: 72px;
        width: 801px;
        height: 705px;
        ul {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-content: flex-start;
          li:nth-child(2) {
            margin: 13px 13px 13px 0;
          }
          li:nth-child(5) {
            margin: 13px 0;
          }
          li {
            width: 394px;
            height: 226px;
            img {
              width: 100%;
              height: 100%;
              vertical-align: top;
            }
          }
        }
      }
    }
    p {
      text-align: center;
      font-size: 26px;
      color: #333333;
      margin: 90px 0 83px;
    }
  }
  .data-table-box {
    width: 100%;
    height: 1120px;
    background-color: #f7f7f7;
    overflow: hidden;
    .img-box {
      width: 1799px;
      height: 875px;
      margin: 60px auto 0px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .btn {
      display: block;
      width: 417px;
      height: 53px;
      margin: 69px auto;
      border: 1px solid #bfbfbf;
      border-radius: 25px 25px;
      font-size: 26px;
      color: #3d3d3d;
      box-shadow: 10px 10px 10px #7e7e7e;
      i {
        display: inline-block;
        width: 0;
        height: 0;
        margin-left: 10px;
        border-left: 10px solid #48494b;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
      }
    }
  }
  .com {
    .com-img {
      width: 1920px;
      height: 908px;
      margin-bottom: 134px;
      box-sizing: border-box;
      img {
        width: 100%;
        height:100%;
      }
    }
  }
}
</style>