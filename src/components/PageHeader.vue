<template>
  <VanNavBar style="border-bottom: 1px solid var(--van-gray-4);">
    <template #left>
      <div class="app-title">{{ name }}</div>
    </template>
    <template #right>
      <van-space :size="5">
        <VanButton type="warning" plain size="small" to="CompanyDetail">
          <VanIcon name="comment-o" size="20" color='#F57301' />
        </VanButton>

        <VanButton type="warning" plain size="small">
          <VanIcon name="user-o" size="20" color='#F57301' />
        </VanButton>
      </van-space>
    </template>
  </VanNavBar>
</template>
<script setup lang="ts">
const name = 'テバチキン'
</script>
<style lang="scss" scoped>
.app-title {
  font-size: 20px;
  font-weight: bold;
}
</style>