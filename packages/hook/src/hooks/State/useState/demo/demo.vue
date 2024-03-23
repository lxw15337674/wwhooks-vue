<template>
  <div>
    <div>data: {{ state.count }}</div>
    <div>isModified:{{ isModified}}</div>
    <p>
      <button @click="state.count++">+</button>
      <button @click="state.count--">-</button>
      <button @click="reset">reset</button>
    </p>
  </div>
</template>

<script lang="ts" setup>
import {useState} from "../";
const [state, { reset, isModified }] = useState(() => ({ count: 1 }))
</script>
<style>
button{
  margin-right: 10px;
}
</style>