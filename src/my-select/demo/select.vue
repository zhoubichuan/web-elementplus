<template>
  <br />
  <div class="card-example">
    <span>large:</span>
    <my-select v-model="value" placeholder="Select" size="large">
      <my-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </my-option>
    </my-select>
    <br />
    <br />
    <span>default：</span>
    <my-select v-model="value" placeholder="Select">
      <my-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </my-option>
    </my-select>
    <br />
    <br />
    <span>small：</span>
    <my-select v-model="value" placeholder="Select" size="small">
      <my-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </my-option>
    </my-select>
    <br />
    <br />
    <span>disabled：</span>
    <my-select v-model="value" disabled placeholder="Select">
      <my-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </my-option>
    </my-select>
    <br />
    <br />
    <span>multiple：</span>
    <my-select v-model="value1" multiple placeholder="Select">
      <my-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </my-option>
    </my-select>
    <br />
    <br />

    <span>group：</span>
    <my-select v-model="value2" placeholder="Select">
      <el-option-group v-for="group in options2" :key="group.label" :label="group.label">
        <my-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </my-option>
      </el-option-group>
    </my-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
const value1 = ref([])

const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
const value2 = ref('')
const options2 = [
  {
    label: 'Popular cities',
    options: [
      {
        value: 'Shanghai',
        label: 'Shanghai'
      },
      {
        value: 'Beijing',
        label: 'Beijing'
      }
    ]
  },
  {
    label: 'City name',
    options: [
      {
        value: 'Chengdu',
        label: 'Chengdu'
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen'
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou'
      },
      {
        value: 'Dalian',
        label: 'Dalian'
      }
    ]
  }
]
</script>

<style lang="scss" scoped>
.card-example {
  span {
    display: inline-block;
    width: 100px;
  }
}
</style>
