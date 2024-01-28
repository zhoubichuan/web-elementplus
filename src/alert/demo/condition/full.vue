<template>
  <camera-item :token="token" ref="root" :cameraInfo="fullInfo" />
</template>

<script>
import cameraItem from './camera.vue'
import { defineComponent, onMounted, computed, ref, inject } from 'vue'
export default defineComponent({
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
  components: {
    cameraItem
  },
  setup(props) {
    const root = ref(null)
    const cameraFn = inject('cameraFn')
    let fullInfo = computed(() => {
      return props.data[0]
    })
    onMounted(() => {
      document.body.appendChild(root.value.$el)
      root.value.$el.requestFullscreen()

      window.addEventListener('fullscreenchange', (e) => {
        var ch = document.body.clientHeight
        var sh = document.body.scrollHeight
        if (ch != sh) {
          cameraFn(props.data[0].deviceSerial, 'state', 'init')
        }
      })
    })
    // onUnmounted(() => {
    //   if (root.value.$el && root.value.$el.parentNode) {
    //     root.value.$el.parentNode.removeChild(root.value.$el)
    //     document.cancelFullScreen()
    //   }
    // })
    return {
      fullInfo,
      root
    }
  }
})
</script>
<style lang="scss" scoped>
.camera-item--full {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
</style>
