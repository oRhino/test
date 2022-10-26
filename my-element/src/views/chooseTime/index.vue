<template>
  <div>
    <m-choose-time
      @startChange="startTimeChange"
      @endChange="endTimeChange"
      :endOptions="endOptions"
    />
    <br />
    <br />
  </div>
</template>

<script setup lang="ts">
const startTimeChange = (time: string) => {
  console.log('开始时间:', time);
};
const endTimeChange = ({
  startTime,
  endTime,
}: {
  startTime: string;
  endTime: string;
}) => {
  console.log(`${startTime}--${endTime}`);
};

const endOptions = {
  clearable: false,
};
</script>

<style scoped></style>
