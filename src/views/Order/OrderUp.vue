<template>
  <Page>
    <VanCollapse v-model="categoryDefaultOpen">
      <VanCollapseItem v-for="(category, i) in cartList" :key="i" :title="category.tenantName" :name="category.tenantId">
        <VanCard v-for="(product, j) in category.productToCartList" :key="j" :tag="product.productTag"
          :price="product.productPrice" currency="￥" :desc="product.productDesc" :title="product.productName"
          thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" :origin-price="product.productOriPrice"
          @click="handleProductInfo(category.tenantId, product)"></VanCard>
      </VanCollapseItem>
    </VanCollapse>
    <!-- <PopUpForProduct
      v-model:showPopUp="showPopUp"
      :popUpInfo="popUpInfo"
      :tenantId="tenantId"
      editOrAdd="true"
    ></PopUpForProduct> -->
  </Page>
</template>

<script setup lang="ts">
import { AnyObject } from '@/types';

const categoryDefaultOpen = ref<string[]>([]);
const cartList = ref([]);
const tenantId = ref<string>('');
const showPopUp = ref(false);
const popUpInfo = ref({
  productId: '',
  cartId: '',
  imageUrl: '',
  basicPrice: '',
  desc: '',
  title: '',
  secondMenu: [],
  secondCheck: [],
  sumPrice: 0,
  num: 1
})
const handleProductInfo = (tenant: string, product: AnyObject) => {
  console.log(product)
  tenantId.value = tenant
  popUpInfo.value.cartId = product.cartId || ''
  popUpInfo.value.productId = product.productId
  popUpInfo.value.title = product.productName
  popUpInfo.value.basicPrice = product.productPrice
  popUpInfo.value.imageUrl = product.productImage
  popUpInfo.value.desc = product.productDesc
  //popUpInfo.value.secondMenu = product.productSecondary;
  popUpInfo.value.secondCheck = product.cartItemSecondaryInfoList
  console.log(popUpInfo.value)
  showPopUp.value = true
}
</script>