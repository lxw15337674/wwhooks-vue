<script setup
        lang="ts">
        import { ref} from "vue";
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
            selectedKeys,
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
                <el-checkbox-group v-model="selectedKeys">
                    <el-checkbox v-for="item in data"
                                 :key="item.id"
                                 :label="item.name" />
                </el-checkbox-group>
            </div>

        </div>
    </div>
</template>
