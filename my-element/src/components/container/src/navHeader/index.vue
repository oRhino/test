<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="collapse"></el-icon-expand>
      <el-icon-fold v-else></el-icon-fold>
    </span>
  </div>
</template>

<script setup lang="ts">
//Cannot redeclare block-scoped variable 'props'
//Fix: 禁用vetur插件 使用volar

let props = defineProps<{
  collapse: boolean;
}>();
let emits = defineEmits(["update:collapse"]);

const toggle = () => {
  emits("update:collapse", !props.collapse);
};
</script>

<style scoped lang="scss">
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
svg{
  width: 1.2em;
  height: 1.2em;
}

</style>
