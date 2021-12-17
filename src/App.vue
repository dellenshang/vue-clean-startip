<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

// import { onMounted } from "@vue/runtime-core"

// console.log(import.meta.env.VITE_APP_WEB_URL)
// import { User } from 'api/user'
// onMounted(async () => {
//   await User.get()
// })
// :theme="getDarkTheme"
// :theme-overrides="getThemeOverrides"
import { zhCN, dateZhCN } from 'naive-ui'
// console.log(zhCN)
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <RouterView />
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  </n-config-provider>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
