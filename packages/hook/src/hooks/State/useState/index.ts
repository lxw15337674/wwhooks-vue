import {
  computed,
  ref,
  UnwrapRef,
} from 'vue';
import { isEqual } from 'lodash-es';

export function useState<D>(defaultValue: () => D) {
  // 初始值必须通过回调才行，否则引用类型会出问题
  let state = ref<D>(defaultValue());
  const reset = () => {
    state.value = defaultValue() as UnwrapRef<D>;
  };
  // 是否被修改
  const isModified = computed(() => {
    return !isEqual(state.value, defaultValue());
  });
  return [
    state,
    {
      reset,
      isModified,
    },
  ] as const;
}
export default useState;
