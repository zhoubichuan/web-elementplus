<template>
    <div class="slider-demo-block">
      <span class="demonstration">Default value</span>
      <web-slider v-model="value1" />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Customized initial value</span>
      <web-slider v-model="value2" />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Hide Tooltip</span>
      <web-slider v-model="value3" :show-tooltip="false" />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Format Tooltip</span>
      <web-slider v-model="value4" :format-tooltip="formatTooltip" />
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Disabled</span>
      <web-slider v-model="value5" disabled />
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const value1 = ref(0)
  const value2 = ref(0)
  const value3 = ref(0)
  const value4 = ref(0)
  const value5 = ref(0)
  
  const formatTooltip = (val: number) => {
    return val / 100
  }
  </script>
  <style scoped>
  .slider-demo-block {
    max-width: 600px;
    display: flex;
    align-items: center;
  }
  .slider-demo-block .web-slider {
    margin-top: 0;
    margin-left: 12px;
  }
  .slider-demo-block .demonstration {
    font-size: 14px;
    color: var(--web-text-color-secondary);
    line-height: 44px;
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0;
  }
  .slider-demo-block .demonstration + .web-slider {
    flex: 0 0 70%;
  }
  </style>