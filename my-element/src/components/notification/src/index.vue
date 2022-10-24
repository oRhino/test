<template>
  <div>
    <el-popover placement="bottom" :width="300" trigger="click">
      <template #default>
        <slot></slot>
      </template>
      <template #reference>
        <el-badge
          style="cursor: pointer"
          :is-dot="isDot"
          :max="max"
          :value="value"
        >
          <component :is="`el-icon-${toLine(icon)}`"></component>
        </el-badge>
      </template>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { toLine } from '@/utils';

let props = defineProps({
  icon: {
    type: String,
    default: 'Bell',
  },
  value: {
    type: [String, Number],
    default: '',
  },
  max: {
    type: Number,
  },
  isDot: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="scss"></style>
