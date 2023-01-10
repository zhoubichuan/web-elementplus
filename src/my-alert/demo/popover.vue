<template>
  <my-tooltip
    class="box-item"
    effect="dark"
    content="Top Left prompts info"
    placement="bottom-start"
  >
    <my-button>top-start</my-button>
  </my-tooltip>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
