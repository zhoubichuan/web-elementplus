<template>
    <web-badge :value="12" class="item">
      <web-button>comments</web-button>
    </web-badge>
    <web-badge :value="3" class="item">
      <web-button>replies</web-button>
    </web-badge>
    <web-badge :value="1" class="item" type="primary">
      <web-button>comments</web-button>
    </web-badge>
    <web-badge :value="2" class="item" type="warning">
      <web-button>replies</web-button>
    </web-badge>
    <web-badge :value="1" class="item" color="green">
      <web-button>custom background</web-button>
    </web-badge>
    <web-dropdown trigger="click">
      <span class="web-dropdown-link">
        Click Me
        <web-icon class="web-icon--right"><caret-bottom /></web-icon>
      </span>
      <template #dropdown>
        <web-dropdown-menu>
          <web-dropdown-item class="clearfix">
            comments
            <web-badge class="mark" :value="12" />
          </web-dropdown-item>
          <web-dropdown-item class="clearfix">
            replies
            <web-badge class="mark" :value="3" />
          </web-dropdown-item>
        </web-dropdown-menu>
      </template>
    </web-dropdown>
  </template>
  
  <script lang="ts" setup>
  import { CaretBottom } from '@element-plus/icons-vue'
  </script>
  
  <style scoped>
  .item {
    margin-top: 10px;
    margin-right: 30px;
  }
  
  .web-dropdown {
    margin-top: 1.1rem;
  }
  </style>