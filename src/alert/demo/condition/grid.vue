<template>
  <div class="centent-grid">
    <div class="timeout-box" ref="timeoutBox" :style="`transform: translateY(${-post}px)`">
      <cameraItem :token="token" v-for="(item, key) in cameraData" :key="key" :cameraInfo="item" :id="key" />
    </div>
  </div>
</template>

<script>
import cameraItem from './camera.vue'

export default {
  props: {
    token: {
      type: String
    }
  },
  components: {
    cameraItem
  },
  inject: {
    cameraData: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      post: 0,
      timeOut: null,
      timeType: 'add'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      if (this.cameraData.length > 9) {
        this.setPostion()
      }
    },
    setPostion() {
      this.timeOut = setTimeout(() => {
        if (this.timeType === 'add') {
          const post = (this.post += 304)
          if (document.documentElement.offsetHeight + post > this.$refs.timeoutBox.scrollHeight) {
            this.post =
              this.$refs.timeoutBox.scrollHeight - (document.documentElement.offsetHeight - 150)
            this.timeType = 'min'
          } else {
            this.post = post
          }
        } else {
          const post = (this.post -= 304)
          if (post < 0) {
            this.post = 0
            this.timeType = 'add'
          } else {
            this.post = post
          }
        }

        this.setPostion()
      }, 1000 * 5)
    }
  },
  beforeUnmount() {
    clearTimeout(this.timeOut)
  }
}
</script>

<style lang="scss" scoped>
.centent-grid {
  box-sizing: border-box;
  clear: both;
  min-width: 1220px;
  height: calc(100vh - 106px);
  .camera {
    float: left;
    margin-right: 16px;
    margin-bottom: 16px;
  }
}
.timeout-box {
  transition: transform 0.4s ease-in-out;
  height: 100%;
}
</style>
