<template>
  <div>
    <m-choose-time
      @startChange="startTimeChange"
      @endChange="endTimeChange"
      :endOptions="endOptions"
    />
    <br />
    <br />
    <m-choose-date
      @startChange="startDateChange"
      @endChange="endDateChange"
      :disableToday="false"
      :endOptions="endOptions"
    />
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

const startDateChange = (startDate: string) => {
  console.log(startDate);
};

const endDateChange = ({
  startDate,
  endDate,
}: {
  startDate: Date;
  endDate: Date;
}) => {
  console.log(startDate, endDate);
};
</script>

<style scoped></style>
