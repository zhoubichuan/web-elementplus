<template>
  <div class="demo-rate-block">
    <span class="demonstration">Default</span>
    <web-rate v-model="value1" />
  </div>
  <div class="demo-rate-block">
    <span class="demonstration">Color for different levels</span>
    <web-rate v-model="value2" :colors="colors" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref(null);
const value2 = ref(null);
const colors = ref(["#99A9BF", "#F7BA2A", "#FF9900"]); // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>

<style scoped>
.demo-rate-block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--web-border-color);
  display: inline-block;
  width: 49%;
  box-sizing: border-box;
}
.demo-rate-block:last-child {
  border-right: none;
}
.demo-rate-block .demonstration {
  display: block;
  color: var(--web-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
