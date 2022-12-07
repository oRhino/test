## 1. why Typescript?

## 2. typescript 开发环境

### 插件:

- `TypeScript Importer`
  会收集你项目内所有的类型定义，在你敲出:时提供这些类型来进行补全。如果你选择了一个，它还会自动帮你把这个类型导入进来.
- `Move TS`
  通过编辑文件的路径，直接修改项目的目录结构,自动帮你把文件目录更改到对应的样子，并且更新其他文件中对这一文件的导入语句。
- `ErrorLens`
  把 VS Code 底部问题栏的错误下直接显示到代码文件中的对应位置

### vscode:

搜索 `typescript Inlay Hints`,配置显示推导的类型

1. Function Like Return Types，显示推导得到的函数返回值类型；
2. Parameter Names，显示函数入参的名称；
3. Parameter Types，显示函数入参的类型；
4. Variable Types，显示变量的类型。

### Playground

`https://www.typescriptlang.org/play`

- 检查错误，可视化的方式配置 tsconfig
- 可以用于 demo 和研究 tsconfig 配置

### 运行环境

ts-node 以及 ts-node-dev

- `ts-node`

```js
-P,--project：指定你的 tsconfig 文件位置。默认情况下 ts-node 会查找项目下的 tsconfig.json 文件，如果你的配置文件是 tsconfig.script.json、
tsconfig.base.json 这种，就需要使用这一参数来进行配置了。

-T, --transpileOnly：禁用掉执行过程中的类型检查过程，这能让你的文件执行速度更快，且不会被类型报错卡住。这一选项的实质是使用了 TypeScript
Compiler API 中的 transpileModule 方法

--swc：在 transpileOnly 的基础上，还会使用 swc 来进行文件的编译，进一步提升执行速度。

--emit：如果你不仅是想要执行，还想顺便查看下产物，可以使用这一选项来把编译产物输出到 .ts-node 文件夹下（需要同时与 --compilerHost 选项一同使
用）。
```

- `node + require hook`

```
node -r ts-node/register index.ts
```

- `ts-node-dev`支持监听文件变更然后重新执行

ts-node-dev 在全局提供了 tsnd

```
ts-node-dev --respawn --transpile-only app.ts
//respawn 选项启用了监听重启的能力，而transpileOnly 提供了更快的编译速度
```

### 类型检查

- `declare` 类型比较
  声明了一个仅在类型空间存在的变量，它在运行时完全不存在，这样就避免了略显繁琐的属性声明

```ts
interface People {
  name: string;
  sex: number;
}
interface Man {
  name: string;
  age: number;
}

declare let p: People;
declare let m: Man;
p = m;
```

- npm 包`tsd`

```ts
import { expectType } from 'tsd';
expectType<string>('typescript'); // √
expectType<string>(1); // ×
```

expectType（检查预期类型与表达式或变量的类型是否一致）
expectNotType（检查预期类型与表达式或变量的类型是否不同）
expectAssignable（检查表达式或变量的类型是否能赋值给预期类型）等工具类型

