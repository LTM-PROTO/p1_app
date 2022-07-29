<template>
  <!-- Video组件 -->
  <div id="common-video">
    <div class="control">
      <video controls id="video">
        <!-- <source src="../Videos/Video/Finalcopy.mp4" type="video/mp4" /> -->
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonVideo",
};
</script>

<style lang="less">
#common-video {
  width: 100%;
  background-color: #000;
  .control {
    width: 1873px;
    margin: 0 auto;
    #video {
      width: 1873px;
    }
  }
}
</style>