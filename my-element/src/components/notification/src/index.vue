<template>
  <div>
    <el-popover placement="bottom" trigger="click">
      <slot></slot>
      <template #reference>
        <el-badge
          :is-dot="isDot"
          :max="max"
          :value="value"
          style="cursor: pointer"
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
