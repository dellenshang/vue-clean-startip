<template>
  <ul class="i-menu i-menu-light i-menu-horizontal header-wrap-pc">
    <svg-icon class="head-logo cursor" name="logo-header" @click="$router.push('/')"></svg-icon>
    <div class="i-menu-time">{{ time }}</div>
  </ul>
  <footer class="footer">スマカン Public-HR Ver.2.0.0 Copyright©スマカン株式会社</footer>
</template>
<script setup lang="ts">
import Utils from '@/utils/utils.js'

const time = ref(null)
const showTime = () => {
  const SeverTime = localStorage.getItem('Mobile_Sever_Time')
  const LocalTime = localStorage.getItem('Mobile_Local_Time')
  const _time = Date.now() - LocalTime + +SeverTime
  const { hourMsg } = Utils.getTime(_time)
  time.value = hourMsg.slice(0, -3)
  useTimeoutFn(showTime, 1000)
}
const getServerTime = () => {
  try {
    // const { data } = await this.http.get('sys/timePunch/serverTime', null)
    // var current = Date.parse(data.sysdate.replace(/-/g, '/'))
    localStorage.setItem('Mobile_Sever_Time', Date.now())
    localStorage.setItem('Mobile_Local_Time', Date.now())
    // localStorage.setItem('Sys_Target_Date', data.targetDate.replace(/-/g, '/'))
    showTime()
  } catch (e) {}
}

getServerTime()
</script>
<style lang="scss" scoped>
.header-wrap-pc,
.header-wrap-mobile {
  padding: 0;
  margin-bottom: -1px; /* 按钮和sider减少1px*/
  height: 50px;
  background: var(--login-panel-bg);
  z-index: 900;
  position: fixed;
  top: 0px;
  display: flex;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  .head-logo {
    position: relative;
    width: 162px;
    height: 50px;
    margin: 0 6px;
    padding: 8px 0 8px;
  }
  &.i-menu-horizontal {
    height: 50px;
    line-height: 50px;
  }
  &.i-menu-light {
    text-align: center;
  }
}
.header-wrap-pc {
  flex-direction: row;
}

@media (max-width: 800px) {
  .header-wrap-pc {
    width: 800px;
  }
}
.footer {
  position: relative;
  margin-top: -32px;
  // position: absolute;
  // bottom: 0;
  background: var(--footer-bg);
  box-shadow: 1px 0 2px rgba(0, 0, 0, 0.1);
  border-top: 1px solid var(--login-panel-bg);
  color: var(--grey);
  font-weight: 700;
  font-size: 13px;
  text-align: center;
  width: 100%;
  padding: 10px 50px;
  height: 32px;
  z-index: 3;
  line-height: 10px;
}
.i-menu-time {
  color: var(--login-svg-fill);
  font-size: 17px;
  font-weight: bold;
  margin-right: 5px;
  letter-spacing: 1px;
}
</style>
