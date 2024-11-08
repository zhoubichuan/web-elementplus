<template>
    <!-- 搜索组件 -->
    <web-search
      class="search-part"
      :condition="condition"
      :value="searchField"
      @input="(val) => updateField(val)"
      @handleSearch="handleSearch"
    >
    </web-search>
  </template>
  <script>
  export default {
    name: "DataEntitySearch",
    data() {
      return {
        searchField: {},
        condition: require("@/assets/data/search1.js").default,
      };
    },
    watch: {},
    methods: {
      updateField(val) {
        this.searchField = val;
        this.$emit("input", this.searchField);
      },
      handleSearch(condition) {
        this.$emit("handleSearch", condition);
      },
    },
  };
  </script>