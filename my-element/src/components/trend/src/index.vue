<template>
  <div class="trend">
    <div class="text" :style="{ color: textColor }">
      <slot v-if="slots.default"></slot>
      <div v-else>{{ text }}</div>
    </div>

    <div class="icon">
      <component
        :is="`el-icon-${toLine(upIcon)}`"
        :style="{ color: !reverseColor ? upIconColor : '#52c4ea' }"
        v-if="type === 'up'"
      ></component>
      <component
        :is="`el-icon-${toLine(downIcon)}`"
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        v-else
      ></component>
      <!-- <el-icon-arrowup
        :style="{ color: !reverseColor ? upIconColor : '#52c4ea' }"
        v-if="type === 'up'"
      ></el-icon-arrowup>
      <el-icon-arrowdown
        :style="{ color: !reverseColor ? downIconColor : '#f5222d' }"
        v-else
      ></el-icon-arrowdown> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { toLine } from '@/utils';
import { useSlots, computed } from 'vue';

//??整那么多属性---- 直接一个text,icon,textColor,iconColor就行了 分什么上升下降
let props = defineProps({
  // 标记当前的趋势是上升(up)还是下降(down)
  type: {
    type: String,
    default: 'up',
  },
  // 上升趋势显示的图标
  upIcon: {
    type: String,
    default: 'ArrowUp',
  },
  // 下降趋势显示的图标
  downIcon: {
    type: String,
    default: 'ArrowDown',
  },
  // 趋势显示的文字
  // 1. 父组件传递过来
  // 2. 插槽
  text: {
    type: String,
    default: '文字',
  },
  // 颜色反转，只对默认颜色生效
  // 如果同时使用了颜色反转和自定义颜色，则自定义颜色不生效
  reverseColor: {
    type: Boolean,
    default: false,
  },
  // 上升趋势图标颜色
  upIconColor: {
    type: String,
    default: '#f5222d',
  },
  // 下降趋势图标颜色
  downIconColor: {
    type: String,
    default: '#52c4ea',
  },
  // 上升趋势文字颜色
  upTextColor: {
    type: String,
    default: '#f5222d',
  },
  // 下降趋势文字颜色
  downTextColor: {
    type: String,
    default: '#52c4ea',
  },
});

//获取插槽内容
let slots = useSlots();
console.log('slot', slots);

// 文字颜色
let textColor = computed(() => {
  return props.type === 'up' ? props.upTextColor : props.downTextColor;
});
</script>

<style scoped lang="scss">
.trend {
  display: flex;
  align-items: center;
  .text {
    font-style: 12px;
    margin-right: 4px;
  }
  .icon {
    svg {
      width: 0.8em;
      height: 0.8em;
    }
  }
}
</style>
