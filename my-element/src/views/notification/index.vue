<template>
  <div>
    <!-- <m-notification></m-notification>
    <m-notification isDot></m-notification>
    <m-notification :max="90"></m-notification> -->
    <m-notification :max="90" :value="100">
      <m-list :list="list" :actions="actions"></m-list>
    </m-notification>
  </div>
</template>

<script setup lang="ts">
import { list, actions } from './data';
</script>

<style scoped lang="scss"></style>
