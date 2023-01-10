<template>
  <br />
  <div style="height: 500px; background: #eee; padding: 24px">
    <my-steps :active="1">
      <my-step title="Step 1"></my-step>
      <my-step title="Step 2"> </my-step>
      <my-step title="Step 3"></my-step>
    </my-steps>
    <br />
    <my-steps :active="2">
      <my-step title="Step 1"></my-step>
      <my-step title="Step 2"> </my-step>
      <my-step title="Step 3"></my-step>
    </my-steps>
    <br />
    <my-steps :active="3">
      <my-step title="Step 1"></my-step>
      <my-step title="Step 2"> </my-step>
      <my-step title="Step 3"></my-step>
    </my-steps>
  </div>
</template>

<script setup lang="ts">
</script>
