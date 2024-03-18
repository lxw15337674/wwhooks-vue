import { Ref, computed } from "vue";

interface Item {
  [key: string]: any;
}

// 返回半选状态、全选状态、切换多选、半选、单选的方法
export default function useSelections<T extends Item = Item>(
  data: Ref<T[]>,
  selected: Ref<T[]>,
  key: string='id',
) {
  const selectAll = (isSelected: boolean) => {
    if (isSelected) {
      selected.value = [...data.value];
    } else {
      selected.value = [];
    }
  };

  const select = (item: T, checked?:boolean) => {
    const index = selected.value.findIndex((i) => i[key] === item[key])
    if (index > -1) {
      if(!checked){
        selected.value.splice(index, 1)
      }
    } else {
      selected.value.push(item)
    }
  };
  const selectByKey = (itemKey: string, toggle = false) => {
    const item = data.value.find((i) => i[key] === itemKey)
    if (item) {
      select(item, toggle)
    }
  }
  const selectGroupByKey = (keys: string[]) => {
    const newSelectedList = data.value.filter((item) => keys.includes(item[key]))
    selected.value = newSelectedList
  }

  const isSelected = (item: T) => {
    return selected.value.findIndex((i) => i[key] === item[key]) > -1;
  };
 
  const partiallySelected = computed(() => {
    return (
      selected.value.length > 0 && selected.value.length < data.value.length
    );
  });

  const allSelected = computed({
    get() {
      return selected.value.length === data.value.length && selected.value.length > 0;
    },
    set(selected: boolean) {
      selectAll(selected);
    },
  })

  const noneSelected = computed(() => {
    return selected.value.length === 0 && data.value.length > 0
  })
  const selectedKeys  = computed({
    get() {
      return selected.value.map((item) => item[key])
    },
    set(keys: string[]) {
      selectGroupByKey(keys)
  }})

  return {
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
  }
}