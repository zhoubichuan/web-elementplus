<template>
  <div class="centent-carousel">
    <div class="zoom-win">
      <cameraItem :token="token" :cameraInfo="dataBig[fullIndex]" id="full" style="width: 100%" />
    </div>
  </div>
</template>

<script>
import cameraItem from './camera.vue'
export default {
  props: {
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    token: {
      type: String
    }
  },
  data() {
    return {
      dataBig: this.data,
      fullIndex: 0
    }
  },
  components: {
    cameraItem
  }
}
</script>

<style lang="scss" scoped>
.centent-carousel {
  height: calc(100vh - 106px);
  .zoom-win {
    margin-bottom: 12px;
    height: 100%;
    .camera {
      height: 100%;
    }
  }
}
</style>
