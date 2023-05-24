<template>
  <Page>
    <VanCollapse v-model="categoryDefaultOpen">
      <VanCollapseItem v-for="(category, i) in menuList" :key="i" :title="category.categoryName"
        :name="category.categoryId">
        <VanCard v-for="(product, j) in category.productInfo" :key="j" :tag="product.productTag"
          :price="product.productPrice" currency="￥" :desc="product.productDesc" :title="product.productName"
          thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" :origin-price="product.productOriPrice"
          @click="handleProductInfo(product)"></VanCard>
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
const menuList = ref([]);
const totalPrice = ref(0);
const tenantId = ref<string>('');
const storeList = ref();
const showPopUp = ref(false);
const popUpInfo = ref({
  productId: '',
  imageUrl: '',
  basicPrice: '',
  desc: '',
  title: '',
  secondMenu: [],
  secondCheck: [],
  num: 1
});
const handleProductInfo = (product: AnyObject) => {
  totalPrice.value = +product.productPrice;
  tenantId.value = storeList.value[0].tenantId;
  popUpInfo.value.productId = product.productId;
  popUpInfo.value.title = product.productName;
  popUpInfo.value.basicPrice = product.productPrice;
  popUpInfo.value.imageUrl = product.productImage;
  popUpInfo.value.desc = product.productDesc;
  popUpInfo.value.secondMenu = product.productSecondary;
  popUpInfo.value.secondCheck = product.productSecondary.map(
    () => {
      return [];
    }
  );
  showPopUp.value = true;
};
</script>