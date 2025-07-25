<template>
  <div aria-label="A complete example of page header">
    <web-page-header @back="onBack">
      <template #breadcrumb>
        <web-breadcrumb separator="/">
          <web-breadcrumb-item :to="{ path: './page-header.html' }">
            homepage
          </web-breadcrumb-item>
          <web-breadcrumb-item
            ><a href="./page-header.html">route 1</a></web-breadcrumb-item
          >
          <web-breadcrumb-item>route 2</web-breadcrumb-item>
        </web-breadcrumb>
      </template>
      <template #content>
        <div class="flex items-center">
          <web-avatar
            class="mr-3"
            :size="32"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="text-large font-600 mr-3"> Title </span>
          <span
            class="text-sm mr-2"
            style="color: var(--web-text-color-regular)"
          >
            Sub title
          </span>
          <web-tag>Default</web-tag>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <web-button>Print</web-button>
          <web-button type="primary" class="ml-2">Edit</web-button>
        </div>
      </template>

      <web-descriptions :column="3" size="small" class="mt-4">
        <web-descriptions-item label="Username"
          >kooriookami</web-descriptions-item
        >
        <web-descriptions-item label="Telephone"
          >18100000000</web-descriptions-item
        >
        <web-descriptions-item label="Place">Suzhou</web-descriptions-item>
        <web-descriptions-item label="Remarks">
          <web-tag size="small">School</web-tag>
        </web-descriptions-item>
        <web-descriptions-item label="Address"
          >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </web-descriptions-item>
      </web-descriptions>
      <p class="mt-4 text-sm">
        Element Plus team uses <b>weekly</b> release strategy under normal
        circumstance, but critical bug fixes would require hotfix so the actual
        release number <b>could be</b> more than 1 per week.
      </p>
    </web-page-header>
  </div>
</template>

<script setup lang="ts">
import { ElNotification as notify } from 'element-plus'

const onBack = () => {
  notify('Back')
}
</script>
