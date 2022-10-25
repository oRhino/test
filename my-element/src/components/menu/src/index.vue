<template>
  <el-menu
    :default-active="defaultActive"
    :router="router"
    v-bind="$attrs"
    class="menu"
  >
    <template v-for="(item, i) in data" :key="i">
      <el-menu-item
        v-if="!item[children as keyof MenuItem] || !item[children as keyof MenuItem].length"
        :index="item[index as keyof MenuItem]"
      >
        <div class="icon">
          <component
            v-if="item[icon as keyof MenuItem]"
            :is="`el-icon-${toLine(item[icon as keyof MenuItem])}`"
          />
        </div>
        <span>{{ item[name as keyof MenuItem] }}</span>
      </el-menu-item>
      <el-sub-menu
        v-if="item[children as keyof MenuItem] && item[children as keyof MenuItem].length"
        :index="item[index as keyof MenuItem]"
      >
        <el-menu-item
          v-for="(child, j) in item[children as keyof MenuItem]"
          :key="j"
          :index="child[index]"
        >
          <div class="icon">
            <component
              v-if="child[icon]"
              :is="`el-icon-${toLine(child[icon])}`"
            />
          </div>
          <span>{{ child[name] }}</span>
        </el-menu-item>
        <template #title>
          <div class="icon">
            <component
              v-if="item[icon as keyof MenuItem]"
              :is="`el-icon-${toLine(item[icon as keyof MenuItem])}`"
            />
          </div>
          <span>{{ item[name as keyof MenuItem] }}</span>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { toLine } from '@/utils';
import { MenuItem } from './types';

let props = defineProps({
  // 导航菜单的数据
  data: {
    type: Array as PropType<MenuItem[]>,
    required: true,
  },
  // 默认选中的菜单
  defaultActive: {
    type: String,
    default: '',
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false,
  },
  // 键名
  // 菜单标题的键名
  name: {
    type: String,
    default: 'name',
  },
  // 菜单标识的键名
  index: {
    type: String,
    default: 'index',
  },
  // 菜单图标的键名
  icon: {
    type: String,
    default: 'icon',
  },
  // 菜单子菜单的键名
  children: {
    type: String,
    default: 'children',
  },
});

console.log(props.data);
</script>

<style lang="scss" scoped>
.menu {
  &:not(.el-menu--collapse) {
    width: 200px;
  }

  .icon {
    position: relative;
    bottom: 1px;

    & * {
      vertical-align: middle;
    }

    svg {
      width: 1em;
      height: 1em;
      margin-right: 4px;
    }
  }
}
</style>
