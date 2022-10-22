<template>
  <div>
    <el-tabs>
      <el-tab-pane
        v-for="(item, index) in list"
        :key="index"
        :lable="item.title"
      ></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { treeEmits } from 'element-plus/es/components/tree-v2/src/virtual-tree';
import { PropType } from 'vue';
import { ListOptions, ActionOptions } from './types';

let props = defineProps({
  list: {
    type: Array as PropType<ListOptions[]>,
    required: true,
  },
  actions: {
    type: Array as PropType<ActionOptions[]>,
    default: () => [],
  },
});

console.log(props.list, props.actions);
</script>

<style scoped lang="scss"></style>
