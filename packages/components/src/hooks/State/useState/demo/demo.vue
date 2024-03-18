<template>
  <div>
    <div>{{ state.count }}</div>
    <br />
    <div>
      <p>
        <button @click="state.count++">+</button>
        <button @click="state.count--">-</button>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useState from '..';
const [state, action] = useState(() => ({ count: 1 }))
</script>