<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="m--choose-icon-dialog-body-height">
    <el-dialog :title="title" v-model="dialogVisible" class="test">
      <div class="container">
        <div
          class="item"
          v-for="(item, index) in Object.keys(ElementPlusIconsVue)"
          :key="item"
          @click="clickItem(item)"
        >
          <!-- 动态组件 -->
          <div class="icon">
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div>{{ item }}</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import { watch, ref } from "vue";
import { toLine } from "../../../utils/index";
import { useCopy } from "../../../hooks/index";

const props = defineProps<{
  title: string;
  visible: boolean;
}>();

let emits = defineEmits(["update:visible"]);
//拷贝父组件传递的值
let dialogVisible = ref<boolean>(props.visible);

const handleClick = () => {
  // dialogVisible.value = !props.visible;
  emits("update:visible", !props.visible);
};

watch(
  () => props.visible,
  (val) => {
    // console.log(val);
    dialogVisible.value = val;
  }
);

// 监听关闭时的变化 告知父组件
watch(
  () => dialogVisible.value,
  (val) => {
    emits("update:visible", val);
  }
);

let clickItem = (item: string) => {
  let text = `<el-icon-${toLine(item)} />`;
  useCopy(text);
  dialogVisible.value = false;
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .item {
    width: 25%;
    height: 70px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    .icon {
      flex: 1;
    }
  }
}

/*** 修改组件内部样式 */
// .m--choose-icon-dialog-body-height {
//   ::v-deep .el-dialog__body {
//     height: 500px;
//     overflow: scroll;
//   }
// }
</style>
