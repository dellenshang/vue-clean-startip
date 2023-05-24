<template>
  <Page>
    <template #header>
      <VanNavBar>
        <template #right>
          <van-space :size="5">
            <VanButton type="warning" plain size="small" to="/">
              <VanIcon name="cross" size="20" color='#F57301' />
            </VanButton>
          </van-space>
        </template>
      </VanNavBar>
    </template>
    <van-form style="margin-top: 50px;">
      <van-cell-group inset>
        <van-field v-model="companyInfo.companyName" label="会社名" readonly />
        <van-field v-model="companyInfo.companyAddress" label="拠点" readonly />
        <van-field v-model="companyInfo.companyEstablishment" label="設立" readonly />
        <van-field v-model="companyInfo.companyCapital" label="資本金" readonly />
        <van-field v-model="companyInfo.companyRepresentative" label="役員 代表取締役社長" readonly />
      </van-cell-group>
    </van-form>

  </Page>
</template>
<script setup lang="ts">
const companyInfo = {
  companyName: '愛遊株式会社',
  companyAddress: '〒124-0006 東京都葛飾区堀切７丁目３−１',
  companyEstablishment: '2023.01.12',
  companyCapital: '５００万円',
  companyRepresentative: '李然'
}
</script>
<style lang="scss" scoped>
.app-title {
  font-size: 20px;
  font-weight: bold;
}
</style>