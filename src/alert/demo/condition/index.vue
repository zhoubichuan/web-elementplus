<template>
  <div>
    <header-breadcrumb :breadcrumbList="breadcrumbList" />
    <main>
      <div class="monitor-content" v-if="token">
        <centent-grid
          :token="token"
          v-if="!(bigState.length || fullState.length)"
          :camera-data="cameradata"
        />
        <centent-carousel :token="token" v-if="bigState.length" :data="bigState" />
      </div>
    </main>
  </div>
  <full-screen :token="token" v-if="token && fullState.length" :data="fullState" />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs, computed, provide } from 'vue'
import cententGrid from './grid.vue'
import cententCarousel from './carousel.vue'
import fullScreen from './full.vue'
import headerBreadcrumb from '../../../web-header-breadcrumb/index.vue'
// import { getYingShiAccessToken } from '@/service/condition/index'

export default defineComponent({
  components: { headerBreadcrumb, cententGrid, cententCarousel, fullScreen },
  setup() {
    const breadcrumbList = [
      {
        name: '农情',
        path: '/condition'
      },
      {
        name: '苗情监控',
        path: '/condition/monitor'
      }
    ]
    const state = reactive({
      cententType: 'grid',
      full: true,
      token: '',
      data: [
        {
          name: '3号地苗情监控',
          deviceSerial: 'G55261897',
          template: 'simple',
          state: 'init',
          isSuspending: true
        },
        {
          name: '12-3苗情监控',
          deviceSerial: 'G55261893',
          template: 'simple',
          state: 'init',
          isSuspending: true
        },
        {
          name: '12-1苗情监控',
          deviceSerial: 'G55261933',
          template: 'simple',
          state: 'init',
          isSuspending: true
        },
        {
          name: '18-6苗情监控',
          deviceSerial: 'G55261975',
          template: 'simple',
          state: 'init',
          isSuspending: true
        }
      ]
    })
    const bigState = computed(() => state.data.filter((item) => item.state === 'big'))
    const fullState = computed(() => state.data.filter((item) => item.state === 'full'))
    const changeData = (deviceSerial: string, key: string, value: string) => {
      state.data.forEach((item: any) => {
        if (item.deviceSerial === deviceSerial) {
          item[key] = value
          console.log(item, 11111)
        }
      })
    }
    provide('cameraFn', changeData)
    provide('cameraData', state.data)
    const handleChangeScreen = () => {
      state.full = !state.full
    }
    onBeforeMount(async () => {
      let req = {
        appKey: '80e97b170e464999889b1f0ba4691d51',
        appSecret: '1ce51e3a23f0e285f57ccba3c37229e6'
      }
      // let res = await getYingShiAccessToken(req)
      // if (res.code === '200' && res.data) {
      //   state.token = res.data.accessToken
      // }
    })
    return {
      bigState,
      fullState,
      handleChangeScreen,
      ...toRefs(state),
      breadcrumbList,
      getNow:new Date(+new Date() + 8 * 3600 * 1000).toJSON().substr(0, 19).replace("T", " ")
    }
  }
})
</script>

<style lang="scss" scoped>
main {
  padding: 20px;
  background: #f2f2f2;
  margin-top: 63px;
}
</style>
