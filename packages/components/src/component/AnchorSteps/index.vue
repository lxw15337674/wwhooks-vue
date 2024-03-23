<template>
    <div class="container">
        <el-anchor :offset="20"
                   :container="containerRef"
                   class="anchor"
                   @click="handleClick"
                   direction="horizontal">
            <el-anchor-link v-for="step in props.steps"
                            :href="'#' + step.key"
                            :title="step.title" />
        </el-anchor>
        <div ref="containerRef"
             class="steps">
            <el-steps direction="vertical">
                <el-step v-for="step in props.steps"
                         :title="step.title">
                    <template #title>
                        <div :id="step.key" >
                            <slot :step="step">
                            </slot>
                        </div>
                    </template>
                </el-step>
            </el-steps>
        </div>
    </div>
</template>

<script lang="ts"
        setup>
        import { ref } from 'vue';
        import {  AnchorStepProps } from './interface';
        const props = withDefaults(defineProps<AnchorStepProps>(), {
            steps: () => []
        });
        const containerRef = ref<HTMLElement | null>(null)
        const handleClick = (e: MouseEvent) => {
            e.preventDefault()
        }
</script>

<style lang="scss"
       scoped>
    .container {
        display: flex;
        flex-direction: column;
        overflow: auto;
        height: 100%;
        .steps {
            flex: 1;
            overflow: auto
        }
    }
</style>