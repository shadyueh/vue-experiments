<script setup lang="ts">
export interface LyricProps {
  title: string
  author?: string
  verses?: Array<{text:string}>
}

const props = withDefaults(
  defineProps<LyricProps>(),
  {
    title: "Not informed",
    author: "Not informed"
    //TODO: add default value for verses property
  }
)
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <cite>{{ author }}</cite>
    <ul>
      <li  v-for="line,index in verses" :key="line.text">{{ line.text }}</li>
    </ul>
  </div>
</template>



<style scoped>
ul {
  margin: 1.5em 0;
}

li {
  list-style: none;
}
</style>