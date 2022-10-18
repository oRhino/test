<template>
  <div>
    <m-choose-icon title="选择图标" v-model:visible="visible"
      >选择图标</m-choose-icon
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MChooseIcon from "../../components/chooseIcon/src/index.vue";

//无法在 "--isolatedModules" 下编译“index.ts”，因为它被视为全局脚本文件。请添加导入、导出或空的 "export {}" 语句来使它成为模块。
//fix: tsconfig.json 中"isolatedModules",设置为 false,

//使用组件时: 不能将类型xxx配给类型xxx
// 通常是因为没有传对应需要的属性

const visible = ref<boolean>(false);
</script>

<style scoped lang="scss"></style>
