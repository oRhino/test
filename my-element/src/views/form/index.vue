<template>
    <div>
        <m-form :options="options"></m-form>
    </div>
</template>

<script setup lang="ts">
import { FormOptions } from '@/components/form/types';

let options: FormOptions[] = [
    {
        type: `input`,
        value: '',
        label: '用户名',
        prop: 'username',
        rules: [{
            required: true,
            message: '用户名不能为空',
            trigger: 'blur',
        }, {
            min: 2,
            max: 6,
            message: '用户名在2-6位之间',
            trigger: 'blur',
        }],
        attrs: {
            clearable: true,
        }
    },
    {
        type: `input`,
        value: '',
        label: '密码',
        prop: 'password',
        rules: [{
            required: true,
            message: '密码不能为空',
            trigger: 'blur',
        }, {
            min: 6,
            max: 15,
            message: '密码在6-15位之间',
            trigger: 'blur',
        }],
        attrs: {
            showPassword: true,
            clearable: true,
        }
    }
]

</script>

<style scoped lang="scss">

</style>