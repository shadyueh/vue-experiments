<script setup lang="ts">
export interface LyricProps {
  title: string
  author?: string
  url?: string
  verses?: Array<{ text: string }>
}

const props = withDefaults(
  defineProps<LyricProps>(),
  {
    title: "Not informed",
    author: "Not informed",
    url: "Not notified",
    //TODO: add default value for verses property
  }
)
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <p><cite>{{ author }}</cite></p>
    <iframe width="560" height="315" :src="url" title="YouTube video player" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <ul>
      <li v-for="line, index in verses" :key="line.text">{{ line.text }}</li>
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