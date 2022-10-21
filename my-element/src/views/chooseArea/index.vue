<template>
  <m-choose-area @change="changeArea" ></m-choose-area>
</template>

<script setup lang="ts">
import { ref } from "vue";
// import MChooseArea from "@/components/chooseArea/src/index.vue";


const changeArea = (val: any) => {
  console.log(val)
}





</script>

<style scoped lang="scss"></style>
