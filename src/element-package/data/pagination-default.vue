<template>
  <div class="example-pagination-block">
    <div class="example-demonstration">页数少时</div>
    <web-pagination :total="5" />
  </div>
  <div class="example-pagination-block">
    <div class="example-demonstration">页数多时</div>
    <web-pagination :total="1000" />
  </div>
</template>

<style scoped>
.example-pagination-block+.example-pagination-block {
  margin-top: 10px;
}

.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>