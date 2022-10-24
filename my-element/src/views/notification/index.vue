<template>
  <div>
    <!-- <m-notification></m-notification>
    <m-notification isDot></m-notification>
    <m-notification :max="90"></m-notification> -->
    <m-notification :max="90" :value="100">
      <m-list
        :list="list"
        :actions="actions"
        @clickItem="clickItem"
        @clickAction="clickAction"
      ></m-list>
    </m-notification>
  </div>
</template>

<script setup lang="ts">
import { list, actions } from './data';
import { ListItem, ListOptions } from '../../components/list/src/types';

const clickItem = (item: ListItem, index: Number) => {
  console.log(item, index);
};

const clickAction = (action: ListOptions, index: Number) => {
  console.log(action, index);
};
</script>

<style scoped lang="scss"></style>
