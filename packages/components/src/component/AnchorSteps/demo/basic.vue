<script setup
        lang="ts">
        import { ref } from 'vue';
        import {AnchorSteps} from 'www-components-vue'
        const steps = ref([
            {
                key: 'step1',
                title: '步骤 1'
            },
            {
                key: 'step2',
                title: '步骤 2'
            },
            {
                key: 'step3',
                title: '步骤 3'
            }
        ]);
</script>

<template>
    <div style='height:200px'>
        <AnchorSteps :steps="steps" >
            <template v-slot="slotProps">
                <div>{{slotProps}}</div>
            </template>
        </AnchorSteps>
    </div>
</template>
