<template>
  <div class="camera">
    <div class="camera-myicon">
      <div v-show="cameraInfo.state !== 'init' && !cameraInfo.isSuspending">
        <div class="handle">
          <span
            @click="handleClick(item.direction)"
            v-for="item in handleButton"
            :key="item.direction"
            :style="`transform: rotate(${item.rotate}deg)`"
            class="myicon-top myicon-row"
          ></span>
        </div>
        <div class="focal-length">
          <!-- <img @click="handleClick(8, 200)" class="add" :src="require(`@/assets/imgs/add.svg`)" />
          <img
            @click="handleClick(9, 200)"
            class="subtraction"
            :src="require(`@/assets/imgs/subtraction.svg`)"
          /> -->
        </div>
      </div>
      <div v-show="cameraInfo.isSuspending">
        <!-- <img src="@/assets/imgs/camera-back.png" alt="" /> -->
      </div>
      <div :class="!cameraInfo.isSuspending ? 'play' : 'suspend'">
        <!-- <img
          style="width: 110px"
          v-show="showIco"
          @click="handlePlay"
          :src="require(`@/assets/imgs/${cameraInfo.isSuspending ? 'play' : 'start'}.svg`)"
        /> -->
      </div>
      <div class="" :id="`video-container${id}`" ref="videoContainer"></div>
    </div>
    <div :class="{ 'camera-opt': true, 'background-top': cameraInfo.isSuspending }"></div>
    <div :class="{ zoom: true, 'background-bottom': true }">
      <div class="name">{{ cameraInfo.name }}</div>
      <span class="myicon-big-screen" @click="handleChangeBig"></span>
      <span class="myicon-full-screen" @click="handleFull"></span>
    </div>
  </div>
</template>

<script>
import EZUIKit from 'ezuikit-js'
// import { ptzStopControl, ptzDirectionControl } from '@/service/condition/index'
import { defineComponent, onMounted, reactive, toRefs, inject } from 'vue'

export default defineComponent({
  props: {
    id: {
      type: String
    },
    cameraInfo: {
      type: Object
    },
    token: {
      type: String
    }
  },
  setup(props, context) {
    let player = null
    const state = reactive({
      showIco: true,
      accessToken: '',
      handleButton: [
        { direction: 0, rotate: 0 },
        { direction: 6, rotate: 45 },
        { direction: 3, rotate: 90 },
        { direction: 7, rotate: 135 },
        { direction: 1, rotate: 180 },
        { direction: 5, rotate: 225 },
        { direction: 2, rotate: 270 },
        { direction: 4, rotate: 315 }
      ]
    })
    const cameraFn = inject('cameraFn')
    const handleClick = async (direction, time = 500) => {
      // let paramsControl = {
      //   accessToken: props.token,
      //   deviceSerial: props.cameraInfo.deviceSerial,
      //   channelNo: '1',
      //   direction
      // }
      // let resControl = await ptzStopControl(paramsControl)
      // if (resControl.code !== '200') return
      // let paramsDirection = {
      //   ...paramsControl,
      //   speed: 1
      // }
      // let resDirection = await ptzDirectionControl(paramsDirection)
      // if (resDirection.code !== '200') return
      // setTimeout(async () => {
      //   let resStop = await ptzStopControl(paramsControl)
      //   if (resStop) {
      //     console.log(resStop, 1111)
      //   }
      // }, time)
    }
    const handlePlay = () => {
      console.log(props.cameraInfo, 333333)
      if (props.cameraInfo.isSuspending) {
        player.play()
      } else {
        player.stop()
      }
      cameraFn(props.cameraInfo.deviceSerial, 'isSuspending', !props.cameraInfo.isSuspending)
    }
    const init = () => {
      let { offsetWidth, offsetHeight } = document.querySelector('.monitor-content')
      let style = {
        width: offsetWidth / 2 - 10,
        height: offsetHeight / 2 - 10
      }

      if (props.cameraInfo.state === 'big') {
        style = {
          width: offsetWidth,
          height: offsetHeight
        }
      } else if (props.cameraInfo.state === 'full') {
        let { offsetWidth, offsetHeight } = document.documentElement

        style = {
          width: offsetWidth,
          height: offsetHeight
        }
      }
      player = new EZUIKit.EZUIKitPlayer({
        autoplay: false,
        id: `video-container${props.id}`,
        accessToken: props.token,
        url: `ezopen://open.ys7.com/${props.cameraInfo.deviceSerial}/1.hd.live`,
        template: props.cameraInfo.template, // simple - 极简版;standard-标准版;security - 安防版(预览回放);voice-语音版；
        // 视频上方头部控件
        // header: ["capturePicture", "save", "zoom"], // 如果templete参数不为simple,该字段将被覆盖
        // plugin: ['talk'],                       // 加载插件，talk-对讲
        // 视频下方底部控件
        // footer: ["talk", "broadcast", "hd", "fullScreen"], // 如果template参数不为simple,该字段将被覆盖
        // audio: 1, // 是否默认开启声音 0 - 关闭 1 - 开启
        // openSoundCallBack: data => console.log("开启声音回调", data),
        // closeSoundCallBack: data => console.log("关闭声音回调", data),
        // startSaveCallBack: data => console.log("开始录像回调", data),
        // stopSaveCallBack: data => console.log("录像回调", data),
        // capturePictureCallBack: data => console.log("截图成功回调", data),
        // fullScreenCallBack: data => console.log("全屏回调", data),
        // getOSDTimeCallBack: data => console.log("获取OSDTime回调", data),
        ...style
      })

      setTimeout(() => {
        if (!props.cameraInfo.isSuspending) {
          player.play()
        }
      }, 1000)
    }
    const handleFull = () => {
      let targetObj = {
        init: 'full',
        big: 'full',
        full: 'init'
      }
      cameraFn(props.cameraInfo.deviceSerial, 'state', targetObj[props.cameraInfo.state])
    }
    const handleChangeBig = () => {
      let targetObj = {
        init: 'big',
        big: 'init',
        full: 'big'
      }
      cameraFn(props.cameraInfo.deviceSerial, 'state', targetObj[props.cameraInfo.state])
    }
    onMounted(() => {
      setTimeout(() => {
        init()
      }, 100)
    })
    return {
      handleClick,
      handlePlay,
      init,
      handleFull,
      handleChangeBig,
      cameraFn,
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
// @import '@/assets/css/_svg.scss';
.camera {
  position: relative;
  &:nth-child(2n) {
    margin-right: 0 !important;
  }
}
.camera-myicon {
  position: relative;
  height: 100%;
  .handle {
    position: absolute;
    height: 202px;
    width: 202px;
    z-index: 100000;
    border-radius: 50%;
    background: #000000;
    opacity: 0.5;
    right: 24px;
    bottom: 208px;
    &:before {
      content: '';
      width: 51px;
      height: 51px;
      background: #ffffff;
      opacity: 0.2;
      position: absolute;
      margin: auto;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      border-radius: 50%;
    }
    .myicon-row {
      left: 50%;
      margin-left: -15px;
      width: 30px;
      height: 101px;
      position: absolute;
      transform-origin: 50% 100%;
      &:before {
        position: absolute;
        top: 20px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .focal-length {
    position: absolute;
    width: 200px;
    height: 60px;
    z-index: 10000;
    bottom: 100px;
    right: 24px;
    img {
      width: 60px;
      cursor: pointer;
    }
    .subtraction {
      right: 0;
    }
  }
  img {
    position: absolute;
    z-index: 1000;
    width: 100%;
    height: 100%;
  }
  .play {
    position: absolute;
    width: 110px;
    height: 110px;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
    img {
      display: none;
    }
    &:hover img {
      display: block;
    }
  }
  .suspend {
    position: absolute;
    width: 110px;
    height: 110px;
    margin: auto;
    cursor: pointer;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10000;
  }
  .big-play {
    width: 140px;
  }
}
.camera-opt {
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  z-index: 1000;
}
.background-top {
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}
.zoom {
  cursor: pointer;
  position: absolute;
  height: 100px;
  width: 100%;
  z-index: 1000;
  bottom: 0;
  left: 0;
  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 20px;
    color: #fff;
    padding: 24px;
  }
}
.background-bottom {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
}
.myicon-full-screen {
  margin-left: 32px;
}
.myicon-big-screen,
.myicon-full-screen {
  font-size: 24px;
  position: absolute;
  right: 24px;
  bottom: 24px;
}
.myicon-big-screen {
  right: 72px;
}
</style>
