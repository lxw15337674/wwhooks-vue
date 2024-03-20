<template>
  <div>
    <div>{{ state.count }}</div>
    <div>{{ isModified}}</div>
    <br />
    <div>
      <p>
        <button @click="state.count++">+</button>
        <button @click="state.count--">-</button>
      </p>
      <p>
        <button @click="reset">reset</button>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useState} from "../index.ts";
const [state, { reset, isModified }] = useState(() => ({ count: 1 }))
</script>