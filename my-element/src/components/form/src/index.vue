<template>
    <div>
        <el-form v-bind="$attrs">
            <el-form-item v-for="(item, index) in options" :label="item.label" :prop="item.prop" :key="index">
                <component :is='`el-${item.type}`' v-bind="item.attrs"></component>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { FormOptions } from '../types';
import { PropType, ref, onMounted } from 'vue';
import cloneDeep from 'lodash/cloneDeep'


let props = defineProps({
    //表单的配置项
    options: {
        type: Array as PropType<FormOptions[]>,
    }
})

let model = ref<any>({})
let rules = ref<any>({})

onMounted(() => {
    // let m: any = {};
    // let r: any = {};
    // props.options?.map((item: FormOptions) => {
    //     m[item.prop!] = item.value
    //     r[item.prop!] = item.rules
    // })
    // model.value = cloneDeep(m)
    // rules.value = cloneDeep(r)
}),


</script>

<style scoped lang="scss">

</style>