<script setup lang="ts">
import { zhCN, dateZhCN, GlobalThemeOverrides, darkTheme } from 'naive-ui'
// import { onMounted } from "@vue/runtime-core"

// console.log(import.meta.env.VITE_APP_WEB_URL)
// import { User } from 'api/user'
// onMounted(async () => {
//   await User.get()
// })
// :theme="getDarkTheme"
// :theme-overrides="getThemeOverrides"
const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColorHover: 'var(--primary-border)'
    // primaryColorSuppl: 'var(--primary-border)',
    // primaryColorPressed
  },
  Input: {
    boxShadowFocus: '0 0 0 2px rgba(205, 128, 13,0.2)'
  },
  Button: {
    textColorHover: 'var(--primary-border)',
    borderHoverPrimary: 'var(--primary-border)',
    borderPrimary: '1px solid var(--primary-border)',
    rippleColorPrimary: 'var(--primary-border)',
    rippleColor: 'var(--primary-border)'
  }
}
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
    <!-- <n-theme-editor> -->
    <router-view v-slot="{ Component }">
      <transition name="refresh">
        <component :is="Component" />
      </transition>
    </router-view>
    <!-- </n-theme-editor> -->
  </n-config-provider>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.n-button--primary-type:not(.n-button--ghost) {
  background: var(--primary-background);
}

.n-button--primary-type.n-button--ghost {
  color: var(--primary-border);
}
.n-button--large-type {
  font-size: 16px;
}
.refresh-enter-active {
  animation: scaleDownUp 0.7s forwards cubic-bezier(0.7, 0, 0.3, 1);
}

@keyframes scaleDownUp {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
