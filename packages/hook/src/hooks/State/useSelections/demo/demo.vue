<script setup
        lang="ts">
        import { ref } from "vue";
        import useSelections from "../index";
        const data = ref([
          {
            id: 1,
            name: "John",
          },
          {
            id: 2,
            name: "Doe",
          },
          {
            id: 3,
            name: "Smith",
          },
        ]);
        const {
          selected,
          allSelected,
          select,
          isSelected,
          partiallySelected
        } = useSelections(data, ref([]), "name");
</script>

<template>
  <div>
    {{ selected }}
    <div>
      <el-checkbox v-model="allSelected"
                   :indeterminate="partiallySelected"
                   label="全选" />
      <div>
        <el-checkbox v-for="item in data"
                     :key="item.id"
                     :model-value="isSelected(item)"
                     @change="select(item)"
                     :label="item.name">
        </el-checkbox>
      </div>

    </div>
  </div>
</template>
