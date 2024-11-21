<template>
  <div class="block text-center">
    <span class="demonstration">
      Switch when indicator is hovered (default)
    </span>
    <web-carousel height="150px">
      <web-carousweb-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </web-carousweb-item>
    </web-carousel>
  </div>
  <div class="block text-center" m="t-4">
    <span class="demonstration">Switch when indicator is clicked</span>
    <web-carousel trigger="click" height="150px">
      <web-carousweb-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </web-carousweb-item>
    </web-carousel>
  </div>
</template>

<style scoped>
.demonstration {
  color: var(--web-text-color-secondary);
}

.web-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.web-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.web-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>