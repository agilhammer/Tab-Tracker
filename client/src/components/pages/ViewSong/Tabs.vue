<template>
  <panel title="Tabs">
    <textarea
      readonly
      v-model="song.tab">
    </textarea>
  </panel>
</template>

<script>
export default {
  props: [
    'song'
  ]
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  font-size: 9px;
  /*padding: 20px;*/
}
</style>
