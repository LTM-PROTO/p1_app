<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-nav">
        <img src="./images/WZNav.png" alt="" />
      </div>
      <div class="footerItem">
        <h4>STEALTH 很有趣，快速有效</h4>
      </div>
      <div class="copyright">
        <ul class="helpLink clearfix">
          <li>
            联系我们
            <span class="space"></span>
          </li>
          <li>
            家
            <span class="space"></span>
          </li>
          <li>
            条款和条件
            <span class="space"></span>
          </li>
          <li>
            隐私政策
            <span class="space"></span>
          </li>
          <li>常见问题</li>
        </ul>
        <p>
          ** Stealth Core Trainer
          可以帮助您提高能量、燃烧卡路里、强身健体、定义腹肌、锻炼手臂、加强双腿、增强臀部，并且可以帮助您保持健康。
        </p>
        <p>
          结果不典型，大多数人的损失会更少。STALTH
          用户遵循STEALTH精益核心计划较少卡路里饮食计划并定期进行 STEALTH
          核心训练器锻炼
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterVue",
};
</script>

<style lang="less" scoped>
@import "../../assets/css/pcstyle.css";
.footer {
  background-color: #000000;
    width: 100%;
    height: 584px;

  display: inline-block;
  .footer-container {
    .footer-nav {
      width: 1120px;
      height: 149px;
      margin: 20px auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .footerItem {
      margin-top: 45px;
      height: 60px;
      h4 {
        line-height: 60px;
        background-color: #f5e70b;
        text-align: center;
        font-size: 34px;
        font-weight: 600;
      }
    }
    .copyright {
      display: flex;
      flex-direction: column;
      // justify-content: space-between;
      align-items: center;
      .helpLink {
        padding: 33px 0;
        li {
          font-size: 22px;
          color: #fff;
          float: left;
          .space {
            border-left: 1px solid #fff;
            width: 1px;
            height: 12px;
            background: #fff;
            margin: 8px 20px;
          }
        }
      }

      p {
        margin-top: 25px;
        text-align: center;
        color: #fff;
      }
    }
  }
}
</style>