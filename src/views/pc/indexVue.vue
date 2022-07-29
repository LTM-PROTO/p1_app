<template>
  <NavBar />
  <HomeVue />
  <FooterVue />
</template>

<script>
import NavBar from "../../components/NavBar/NavBar.vue";
import FooterVue from "../../components/Footer/FooterVue.vue";
import HomeVue from "./Home/homeVue.vue";
export default {
  components: {
    NavBar,
    FooterVue,
    HomeVue,
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/css/reset.css";
</style>