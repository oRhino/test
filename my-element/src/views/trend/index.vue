<template>
  <div>
    <div class="flex">
      <m-trend text="营业额"></m-trend>
      <m-trend text="销售额" type="down" style="margin-left: 20px"></m-trend>
    </div>
    <br />
    <div class="flex">
      <m-trend text="营业额" upIconColor="blue"></m-trend>
      <m-trend
        text="销售额"
        type="down"
        downIconColor="black"
        style="margin-left: 20px"
      ></m-trend>
    </div>

    <m-trend>营业额</m-trend>
    <m-trend reverseColor>营业额</m-trend>
    <m-trend upIcon="Aim">区域</m-trend>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.flex {
  display: flex;
}
</style>
