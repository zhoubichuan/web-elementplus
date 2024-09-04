<template>
  <web-row>
    <web-button size="large">Large</web-button>
    <web-button>Default</web-button>
    <web-button size="small">Small</web-button>
    <web-button size="large" :icon="Search">Search</web-button>
    <web-button :icon="Search">Search</web-button>
    <web-button size="small" :icon="Search">Search</web-button>
  </web-row>
  <web-row class="web-4">
    <web-button size="large" round>Large</web-button>
    <web-button round>Default</web-button>
    <web-button size="small" round>Small</web-button>
    <web-button size="large" :icon="Search" round>Search</web-button>
    <web-button :icon="Search" round>Search</web-button>
    <web-button size="small" :icon="Search" round>Search</web-button>
  </web-row>
  <web-row>
    <web-button :icon="Search" size="large" circle />
    <web-button :icon="Search" circle />
    <web-button :icon="Search" size="small" circle />
  </web-row>
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
</script>
