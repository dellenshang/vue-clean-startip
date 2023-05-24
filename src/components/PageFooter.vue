<template>
  <VanTabbar route safeAreaInsetBottom style="border-top: 1px solid var(--van-gray-4);">
    <VanTabbarItem to="/">
      <VanIcon name="wap-home-o" size="30"></VanIcon>
    </VanTabbarItem>
    <VanTabbarItem to="OrderMenu">
      <VanIcon name="orders-o" size="30"></VanIcon>
    </VanTabbarItem>
    <VanTabbarItem to="OrderUp">
      <VanIcon name="cart-o" size="30"></VanIcon>
    </VanTabbarItem>
    <VanTabbarItem :to="isLogin ? 'PersonalHome' : 'Login'">
      <VanIcon name="user-o" size="30"></VanIcon>
    </VanTabbarItem>
  </VanTabbar>
</template>
<script setup lang="ts">
const isLogin = localStorage.getItem('LoginInfo')
</script>
<style lang="scss" scoped>
</style>