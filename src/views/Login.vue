<template>
  <div class="login">
    <n-grid :cols="2">
      <n-gi class="left-part">
        <svg-icon class="btm-logo" name="logo-suit-w"></svg-icon>
      </n-gi>
      <n-gi class="right-part">
        <div class="login-warp">
          <div class="title">
            <svg-icon class="logo-warp" name="logo"></svg-icon>
            <div class="tr">公的機関向け就業管理システム</div>
          </div>
          <div class="login-content">
            <p class="login-label">アカウント</p>
            <div class="login-item">
              <n-input :input-props="{ autocomplete: 'off', spellcheck: 'false' }" placeholder="アカウント">
                <template #prefix>
                  <svg-icon name="ios-contact"></svg-icon>
                </template>
              </n-input>
            </div>
            <p class="login-label">パスワード</p>
            <div class="login-item">
              <n-input
                placeholder="パスワード"
                type="password"
                :input-props="{ autocomplete: 'new-password', spellcheck: 'false' }"
              >
                <template #prefix>
                  <svg-icon name="md-key"></svg-icon>
                </template>
              </n-input>
            </div>
            <n-grid x-gap="16" :cols="2" class="mt10 mb5">
              <n-gi>
                <n-button ghost type="primary" size="large" class="width100">xxxxx</n-button>
              </n-gi>
              <n-gi>
                <n-button size="large" class="width100">xxxxx</n-button>
              </n-gi>
            </n-grid>
            <div class="login-btn">
              <n-button class="width100" type="primary" size="large" @click="login"> ログイン </n-button>
            </div>
          </div>
        </div>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
const login = () => {
  router.push('/home')
  // router.push('/createApplySheet')
}
</script>

<style scope lang="scss">
body {
  background: rgb(247, 247, 247);
}
.left-part {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 600px;
  height: 100vh;
  background: var(--login-left-part-bg);
  .top-logo {
    height: 130px;
    width: 130px;
    background-repeat: no-repeat;
    margin: 0 auto 5px;
  }
  .btm-logo {
    height: 130px !important;
    width: 360px !important;
    background-repeat: no-repeat;
    margin: 0 auto;
  }
}
.right-part {
  height: 100vh;
  min-height: 600px;
  background: var(--login-right-part-bg);
}
.login {
  min-width: 800px;
  height: 100vh;
  margin: 0 auto;
  .login-warp {
    width: 520px;
    margin: 15% auto 0;
    transform: scale(0.8);
    overflow: hidden;
    background: var(--login-panel-bg);
    border-radius: 20px;
    @media (min-height: 800px) {
      transform: scale(0.9);
    }
    @media (max-height: 700px) {
      margin-top: 10%;
    }
    .title {
      padding: 20px 34px 10px;
      border-bottom: 1px solid var(--login-title-border-b);
      .logo-warp {
        width: 360px;
        height: 51px;
        background-repeat: no-repeat;
        background-size: 91%;
      }
    }
    .login-content {
      flex-direction: column;
      justify-content: space-around;
      display: flex;
      padding: 20px 26px;
      height: 400px;
      .login-label {
        display: inline-block;
        text-align: left;
        font-size: 16px;
        font-weight: bold;
        color: var(--login-title-label);
        background: transparent;
      }
    }
  }
  .n-input-wrapper {
    padding-left: 25px;
    .n-input__prefix {
      padding-right: 15px;
      .svg-icon {
        width: 30px;
        height: 30px;
        fill: #808695;
      }
    }
  }
  .n-input,
  .n-input__input {
    height: 50px;
    line-height: 50px;
    color: var(--grey);
    border-color: var(--input-border);
    background-color: var(--input-bg);
    .n-input__input-el {
      color: var(--grey);
    }
  }
}
</style>
