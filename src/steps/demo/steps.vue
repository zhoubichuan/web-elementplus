<template>
  <br />
  <div style="height: 500px; background: #eee; padding: 24px">
    <web-steps :active="1">
      <web-step title="Step 1"></web-step>
      <web-step title="Step 2"> </web-step>
      <web-step title="Step 3"></web-step>
    </web-steps>
    <br />
    <web-steps :active="2">
      <web-step title="Step 1"></web-step>
      <web-step title="Step 2"> </web-step>
      <web-step title="Step 3"></web-step>
    </web-steps>
    <br />
    <web-steps :active="3">
      <web-step title="Step 1"></web-step>
      <web-step title="Step 2"> </web-step>
      <web-step title="Step 3"></web-step>
    </web-steps>
  </div>
</template>

<script setup lang="ts">
</script>
