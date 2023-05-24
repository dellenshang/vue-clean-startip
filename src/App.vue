<script setup lang="ts">
import type { ConfigProviderTheme } from 'vant'

const theme = ref<ConfigProviderTheme>('light')
</script>

<template>
  <van-config-provider :theme="theme">
    <router-view v-slot="{ Component }">
      <component :is="Component" :key="$route.fullPath"></component>
    </router-view>
  </van-config-provider>
</template>
