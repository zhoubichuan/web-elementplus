<template>
    <web-radio-group v-model="size" aria-label="size control">
      <web-radio-button value="large">large</web-radio-button>
      <web-radio-button value="default">default</web-radio-button>
      <web-radio-button value="small">small</web-radio-button>
    </web-radio-group>
    <div class="demo-date-picker">
      <div class="block">
        <span class="demonstration">Default</span>
        <web-date-picker
          v-model="value1"
          type="date"
          placeholder="Pick a day"
          :size="size"
        />
      </div>
      <div class="block">
        <span class="demonstration">Picker with quick options</span>
        <web-date-picker
          v-model="value2"
          type="date"
          placeholder="Pick a day"
          :disabled-date="disabledDate"
          :shortcuts="shortcuts"
          :size="size"
        />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const size = ref<'default' | 'large' | 'small'>('default')
  
  const value1 = ref('')
  const value2 = ref('')
  
  const shortcuts = [
    {
      text: 'Today',
      value: new Date(),
    },
    {
      text: 'Yesterday',
      value: () => {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24)
        return date
      },
    },
    {
      text: 'A week ago',
      value: () => {
        const date = new Date()
        date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
        return date
      },
    },
  ]
  
  const disabledDate = (time: Date) => {
    return time.getTime() > Date.now()
  }
  </script>
  
  <style scoped>
  .demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
  }
  
  .demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--web-border-color);
    flex: 1;
  }
  
  .demo-date-picker .block:last-child {
    border-right: none;
  }
  
  .demo-date-picker .demonstration {
    display: block;
    color: var(--web-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
  </style>