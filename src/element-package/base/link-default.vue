<template>
  <div>
    <web-link href="https://webement-plus.org" target="_blank">default</web-link>
    <web-link type="primary">primary</web-link>
    <web-link type="success">success</web-link>
    <web-link type="warning">warning</web-link>
    <web-link type="danger">danger</web-link>
    <web-link type="info">info</web-link>
  </div>
</template>

<style scoped>
.web-link {
  margin-right: 8px;
}

.web-link .web-icon--right.web-icon {
  vertical-align: text-bottom;
}
</style>