<template>
  <div class="page-container" style="background:var(--van-gray-1)">
    <header class="page-header" v-if="hasHeader" style="border-bottom: 1px solid var(--van-gray-4);">
      <slot name="header"></slot>
    </header>
    <PageHeader v-else></PageHeader>
    <main class="page-main">
      <slot></slot>
    </main>
    <footer class="page-footer" v-if="hasFooter">
      <slot name="footer"></slot>
    </footer>
    <PageFooter v-else></PageFooter>
  </div>
</template>
<script setup lang="ts">
const slots = useSlots()
const hasHeader = slots.header
const hasFooter = slots.footer
</script>
<style lang="scss" scoped>
.page-container {
  min-height: 100vh;
}

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.page-main {
  position: relative;
  width: 100%;
}

.page-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 200;
}
</style>