# useSelections

常见联动 Checkbox 逻辑封装，支持多选，单选，全选逻辑，还提供了是否选择，是否全选，是否半选的状态。


## 代码演示
<demo src="./demo/demo.vue" title="基本用法" desc="使用el-checkbox"></demo>

<demo src="./demo/demo2.vue" title="多选框组" desc="使用el-checkbox-group"></demo>

## API

```typescript
const  {
    selected,
    select,
    selectByKey,
    selectGroupByKey,
    isSelected,
    partiallySelected,
    allSelected,
    noneSelected,
    selectAll,
    selectedKeys,
  } = useSelections<T>(data:Ref<T[]>, selected:Ref<T[]>，key:string);
```

## Params

| 参数         | 说明                     | 类型      | 默认值  |
| ------------ | ------------------------ | --------- | ------- |
| data         | 数据源                   | `Ref<T[]>` | -       |
| selected     | 选中的数据               | `Ref<T[]>` | -       |
| key          | 数据源的唯一标识         | `string`   | `id`   |

### Result

| 参数         | 说明                     | 类型      
| ------------ | ------------------------ | ---------
| selected     | 选中的数据               | `Ref<T[]>`
| select       | 选中某一项               | `(item: T,, checked?: boolean) => void`
| selectByKey  | 通过key选中某一项        | `(key: string, checked?: boolean) => void`
| selectGroupByKey  | 通过key选中某一组      | `(key: string[]) => void`
| isSelected   | 是否选中某一项            | `(item: T) => boolean`
| partiallySelected | 是否半选中             | `ComputedRef<boolean>`
| allSelected  | 是否全选                 | `WritableComputedRef<boolean>`
| noneSelected | 是否全不选               | `ComputedRef<boolean>`
| selectAll    | 全选                     | `(isSelected:boolean) => void`
| selectedKeys | 选中的key                | `WritableComputedRef<string[]>`
