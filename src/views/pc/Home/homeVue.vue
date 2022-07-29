<template>
  <CommonVideo />
  <MuscleGroup/>
  <IphoneGame/>
  <StarSelect/>
  <QRCode/>
</template>

<script>
import CommonVideo from "@/views/pc/Home/Videos/videoVue.vue";
import MuscleGroup from "./MuscleGroup/MuscleGroups.vue"
import IphoneGame from "./IphoneGame/IphoneGame.vue";
import StarSelect from './StarSelect/StarSelect.vue'
import QRCode from './QRCode/QRVode.vue'
export default {
  components: {
    CommonVideo,
    MuscleGroup,
    IphoneGame,
    StarSelect,
    QRCode
  },
};
</script>

<style>
</style>