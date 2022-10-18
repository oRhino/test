<template>
  <el-container>
    <!-- aside -->
    <el-aside width="auto">
      <nav-aside :collapse="isCollapse"></nav-aside>
    </el-aside>
    <!-- container -->
    <el-container>
      <!-- header -->
      <el-header>
        <nav-header v-model:collapse="isCollapse"></nav-header>
      </el-header>
      <!-- main -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import NavAside from "./navAside/index.vue";
import NavHeader from "./navHeader/index.vue";
let isCollapse = ref(false);
</script>

<style scoped lang="scss">
.el-header {
  padding: 0;
  border-bottom: 1px solid #eee;
}
</style>
