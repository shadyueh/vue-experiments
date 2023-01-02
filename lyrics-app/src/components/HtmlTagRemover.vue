<template>
  <div>
    <h1>Html Tag Remover</h1>
    <p>Use this app to remove html tags from text. Simply type or paste your text into the input textarea, and the app
      will automatically remove the html tags and display the resulting text in the output textarea.</p>
    <textarea v-model="inputText" @change="updateOutputText"></textarea>
    <textarea v-model="outputText"></textarea>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

export interface HtmlTagRemoverProps {
  inputText: string
  outputText: string
}

const inputText = ref('')
const outputText = ref('')

onMounted(() => {
  inputText.value = ''
  outputText.value = ''
})

function updateOutputText() {
  outputText.value = removeHTMLTags(inputText.value)
}

function removeHTMLTags(text: string): string {
  return text.replace(/<[^>]+>/g, '')
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 200px;
  margin: 20px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
}

@media (prefers-color-scheme: dark) {
  textarea {
    background-color: #333;
    color: #fff;
    border-color: #444;
  }
}
</style>