<template>
  <web-row>
    <web-col :span="24"><div class="grid-content ep-bg-purple-dark" /></web-col>
  </web-row>
  <web-row>
    <web-col :span="12"><div class="grid-content ep-bg-purple" /></web-col>
    <web-col :span="12"><div class="grid-content ep-bg-purple-light" /></web-col>
  </web-row>
  <web-row>
    <web-col :span="8"><div class="grid-content ep-bg-purple" /></web-col>
    <web-col :span="8"><div class="grid-content ep-bg-purple-light" /></web-col>
    <web-col :span="8"><div class="grid-content ep-bg-purple" /></web-col>
  </web-row>
  <web-row>
    <web-col :span="6"><div class="grid-content ep-bg-purple" /></web-col>
    <web-col :span="6"><div class="grid-content ep-bg-purple-light" /></web-col>
    <web-col :span="6"><div class="grid-content ep-bg-purple" /></web-col>
    <web-col :span="6"><div class="grid-content ep-bg-purple-light" /></web-col>
  </web-row>
  <web-row>
    <web-col :span="4"><div class="grid-content ep-bg-purple" /></web-col>
    <web-col :span="4"><div class="grid-content ep-bg-purple-light" /></web-col>
    <web-col :span="4"><div class="grid-content ep-bg-purple" /></web-col>
    <web-col :span="4"><div class="grid-content ep-bg-purple-light" /></web-col>
    <web-col :span="4"><div class="grid-content ep-bg-purple" /></web-col>
    <web-col :span="4"><div class="grid-content ep-bg-purple-light" /></web-col>
  </web-row>
</template>

<style lang="scss">
.web-row {
  margin-bottom: 20px;
}
.web-row:last-child {
  margin-bottom: 0;
}
.web-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.ep-bg-purple-dark {
  background: #99a9bf;
}
.ep-bg-purple {
  background: #d3dce6;
}
.ep-bg-purple-light {
  background: #e5e9f2;
}
</style>
