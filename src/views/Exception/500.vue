<template lang="">
  <main class="error-page">
    <section class="error-wrap">
      <figure class="error-img" style="background-image: url('/svg/4500.svg')"></figure>
      <section class="error-content">
        <h1 class="mb20">500</h1>
        <p class="p mb15">ページは表示できませんでした。</p>
        <n-button type="primary" ghost size="large" @click="$router.push('/')">ホームページへ</n-button>
      </section>
    </section>
  </main>
</template>
<style lang="scss" scoped>
.error-page {
  min-height: 100vh;
  background: var(--light-grey);
  .error-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(104, 109, 116);
    height: 72vh;
    .error-img {
      width: 100%;
      max-width: 430px;
      height: 360px;
      padding-right: 150px;
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: contain;
    }
    .error-content {
      flex: 0.5;
      margin-left: 50px;
    }
    h1 {
      font-size: 72px;
      line-height: 72px;
    }
    .p {
      font-size: 20px;
      line-height: 28px;
      color: var(--text-light-grey);
    }
    .action {
      height: 32px;
      padding: 0 15px;
      border: 1px solid transparent;
      border-radius: 2px;
      color: rgb(104, 109, 116);
      background-color: var(--green);
      cursor: pointer;
      user-select: none;
      touch-action: manipulation;
    }
  }
}
@media (max-width: 1280px) {
  .error-wrap {
    width: 1280px;
  }
}
</style>
