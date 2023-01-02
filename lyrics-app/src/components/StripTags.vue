<script setup lang="ts">
import sanitizer from 'sanitize-html';

export interface StripTagsProps {
  taggedEntry?: string,
  tagStrippedText?: string
}

let { taggedEntry, tagStrippedText } = withDefaults(
  defineProps<StripTagsProps>(),
  {
    taggedEntry: "",
    tagStrippedText: ""
  }
)

const emit = defineEmits(['update:tagStrippedText'])

const handleChange = (event: Event) => {
  emit('update:tagStrippedText', () => {
  tagStrippedText = stripTags((event.target as HTMLInputElement).value)});
  // console.log((event.target as HTMLInputElement).value);
  console.log(tagStrippedText);
}

const stripTags = (textEntry:string) => {
  return sanitizer(textEntry, {
    allowedTags: [],
  });
};

</script>

<template>
  <div>
    <textarea id="" cols="30" rows="10" :value="taggedEntry" @change="handleChange"></textarea>
    <textarea name="" id="" cols="30" rows="10" readonly>{{taggedEntry}}</textarea>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em;
}

button {
  width: fit-content;
  background-color: var(--);
}
</style>