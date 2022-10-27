## script setup

### 使用 script setup

```js
<script setup>
console.log('hello script setup')
</script>

<script setup lang='ts'>
console.log('hello script setup')
</script>

```

1.  普通的 <script> 只在组件被首次引入的时候执行一次.
2.  <script setup> 中的代码会在每次组件实例被创建的时候执行.
3.  在 <script setup> 声明的顶层的绑定 (包括变量，函数声明，以及 import 导入的内容<包含组件>) 都能在模板中直接使用.

### definePops() 和 defineEmits() / withDefaults

1. 编译器宏,不需要导入,只能在<script setup>中使用
2. defineProps 接收与 props 选项相同的值，defineEmits 接收与 emits 选项相同的值。
3. 提供恰当的类型推导
4. 在模板可以直接使用 defineProps 的变量,在<script setup>使用可以用其返回值获取对应属性

```js
// using Array syntax
const props = defineProps(['foo', 'bar']);
// using Object syntax
const props = defineProps({
  foo: String,
  bar: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(['change', 'delete']);
```

```ts
const props = defineProps<{
  foo?: string;
  bar: number;
}>();

//可以使用withDefaults为ts的defineProps添加默认值
const props = withDefaults(
  defineProps<{
    msg?: string;
    labels?: string[];
  }>(),
  {
    msg: 'hello',
    labels: () => ['one', 'two'],
  }
);
const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();
```

### defineExpose

1. 使用 <script setup> 的组件是默认关闭的( 即 ref 或者 $parent 链获取到的组件的公开实例，不会暴露任何在 <script setup> 中声明的绑定)。

2. 可以通过 defineExpose 编译器宏来显式指定在 <script setup> 组件中要暴露出去的属性

```js
const a = 1;
const b = ref(2);

defineExpose({
  a,
  b,
});
```

### useSlots() 和 useAttrs()

1. 在模板中直接通过 $slots 和 $attrs 来访问
2. useSlots 和 useAttrs 是两个辅助函数,本质就是获取上下文对象中的对应属性(参见:apiSetupHelpers)

```js
const slots = useSlots();
const attrs = useAttrs();
```

## vite 配置别名@

- vite.config.ts

```ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'; //vite 3 不支持commonjs
// const path = require('path') //vite 2

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
```

- tsconfig.json

```json
//添加
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
```

## Vite 使用 jsx

- npm 安装 插件

```
npm i -D @vitejs/plugin-vue-jsx
yarn add -D @vitejs/plugin-vue-jsx
```

- vite.congfig.ts

```ts
import vuejsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [vue(), vuejsx()],
  //....
}
```
