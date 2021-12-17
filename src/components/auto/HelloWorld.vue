<script setup lang="ts">
defineProps<{ msg: string }>()
onMounted(() => {
  // console.log(locale)
})
const count = ref(0)
const timestamp = ref(1183135260000)
const { locale } = useI18n()
</script>

<template>
  <h1>{{ msg }}</h1>
  <n-button @click="count++">{{ $t('select') }}{{ count }}</n-button>
  <n-date-picker v-model:value="timestamp" type="date" clearable />
  <select id="locale-select" v-model="locale">
    <option value="en">en</option>
    <option value="ja">ja</option>
    <option value="zh">zh</option>
  </select>
  <div>{{ timestamp }}</div>
  <svg-icon icon-class="bug"></svg-icon>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
