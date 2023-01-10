<template>
  <br />
  <my-card>
    <template #header>
      <div class="card-header">
        <span>Card name</span>
        <el-button class="button" type="text">Operation button</el-button>
      </div>
    </template>
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </my-card>
</template>

<style lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
