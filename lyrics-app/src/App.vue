<script setup lang="ts">
import TagRipper from "./components/HtmlTagRemover.vue";
import Lyric, { LyricProps } from './components/Lyric.vue'
import lyricData from './data/lyrics.json'

const lyrics: LyricProps[] = lyricData;

</script>


<template>
  <aside>
    <TagRipper />
  </aside>
  <main>
    <Lyric v-for="lyric, index in lyrics" :key="index" :title="lyric.title" :author="lyric.author" :url="lyric.url"
      :verses="lyric.verses" />
  </main>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
