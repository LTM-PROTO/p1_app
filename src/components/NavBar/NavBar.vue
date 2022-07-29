<template>
  <div class="navbar">
    <div class="navbar-inside clearfix">
      <div class="navbar-inside-logo">
        <a href="#">
          <img src="./images/LOGO.png" alt="" />
        </a>
      </div>
      <div class="navbar-inside-nav">
        <ul class="nav clearfix">
          <li class="item"><a href="#" class="big">首页</a></li>
          <li><a href="#">核心训练</a></li>
          <li><a href="#">成果分享</a></li>
          <li><a href="#">关于STEALTH</a></li>
          <li><a href="#">答疑解惑</a></li>
          <li><a href="#">加入我们</a></li>
          <li class="s-chinese">
            <a href="#">简体中文<i>^</i> </a>
            <ul class="s-chinese-drop-Box">
              <li href="#"><a href="#">简体中文 </a></li>
              <li href="#"><a href="#">繁体中文 </a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    aaaa
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {},
};
</script>

<style lang='less' scoped>
@import "../../assets/css/pcstyle.css";

.navbar {
  width: 100%;
  height: 129px;
  background-color: #000000;
  padding-top: 80px;
  box-sizing: border-box;
  .navbar-inside {
    width: 1560px;
    margin: 0 auto;
    .navbar-inside-logo {
      float: left;
      width: 354px;
      height: 42px;
      a {
        display: block;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .navbar-inside-nav {
      float: left;
      // width: 1118px;
      padding-left: 14px;
      position: relative;

      .nav {
        display: flex;
        height: 42px;
        li {
          line-height: 42px;
          .big {
            font-size: 38px;
          }
          a {
            display: block;
            font-size: 24px;
            padding: 0 28px;
            text-decoration: none;
            font-weight: 400;
            color: #ffffff;
          }
        }

        .s-chinese {
          .s-chinese-drop-Box {
            display: none;
            position: absolute;
            z-index: 1000;
            top: 42px;
            right: 0;
            width: 173px;
            // height: 93px;
            background-color: #000000;
            li {
              float: none;
              line-height: 46.5px;
              a {
                display: block;
                text-align: center;
              }
            }
          }
        }
        .s-chinese:hover .s-chinese-drop-Box {
          display: block;
        }
      }
    }
  }
}
</style>
