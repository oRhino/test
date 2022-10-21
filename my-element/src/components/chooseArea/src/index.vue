<template>
  <div>
    <el-select clearable v-model="province" placeholder="请选择省份">
      <el-option v-for="item in allAreas" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select clearable v-model="city" class="my-select" placeholder="请选择城市" :disabled="!province">
      <el-option v-for="item in selectCitys" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
    <el-select clearable v-model="area" class="my-select" placeholder="请选择区域" :disabled="!province || !city">
      <el-option v-for="item in selectAreas" :key="item.code" :label="item.name" :value="item.code" />
    </el-select>
  </div>
</template>

<script setup lang="ts">


import { ref, computed, watch } from "vue";
import allAreas from "../lib/pca-code.json";
import { AreaItem ,Data} from '../types'

// console.log(allAreas);

//所有省市区数据
const areas = ref(allAreas);

//省 市区
const province = ref<string>("");
const city = ref<string>("");
const area = ref<string>("");

// 省对应的城市
let selectCitys = ref<AreaItem[]>([]);
// 城市对应的区域
let selectAreas = ref<AreaItem[]>([]);


let emits = defineEmits(['change'])
// let selectCitys = computed(() => {
//   if(!province.value) {return []
//   }else{
//     let citys = areas!.value.find( item => item.code === province.value)!.children
//     return citys
//   }
// })

// let selectAreas = computed(() => {
//   if(!city.value) {return []
//   }else{
//     let area = selectCitys!.value.find( item => item.code === city.value)!.children
//     return area
//   }
// })

watch(() => province.value, (val) => {
  if (val) {
    selectCitys.value = areas!.value.find(item => item.code === province.value)!.children as [AreaItem]
  }
  city.value = "";
  area.value = "";
})

watch(() => city.value, (val) => {
  if (val) {
    selectAreas.value = selectCitys!.value.find(item => item.code === city.value)!.children!
  }
  area.value = "";
})


watch( () => area.value, (val)=> {
  if(!val) return;
  let provinceData:Data  = {
    code:province.value,
    name:province.value && allAreas.find(item => item.code === province.value)!.name
  }
  let cityData:Data  = {
    code:city.value,
    name: city.value && selectCitys.value.find(item => item.code === city.value)!.name
  }
  let areaData:Data  = {
    code:area.value,
    name:area.value && selectAreas.value.find(item => item.code === area.value)!.name
  }
  // console.log(provinceData,cityData,areaData);
  emits('change',{
    province:provinceData,
    city:cityData,
    area:areaData
  })

})

</script>

<style scoped lang="scss">
.my-select {
  margin-left: 10px;
}
</style>
