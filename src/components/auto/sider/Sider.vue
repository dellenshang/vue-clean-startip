<script setup lang="ts">
import { sider as topNavs } from './sider'
const curMenu = ref(null)
const navbar = ref(null)
let forDoubleclickSiderIconCloseSider = false
const showSider = ref(false)
const handleMenuGroupChange = item => {
  if (item.pageId === forDoubleclickSiderIconCloseSider) showSider.value = !showSider.value
  else showSider.value = true
  forDoubleclickSiderIconCloseSider = item.pageId
  curMenu.value = item.pageId
}
onClickOutside(navbar, event => {
  showSider.value = false
})
</script>

<template>
  <nav class="navbar-wrap" style="margin-top: 51px" ref="navbar">
    <ul class="navbar-nav">
      <li
        class="nav-item"
        v-for="item of topNavs"
        :class="curMenu === item.pageId ? 'actived-menu' : ''"
        :key="item.pageId"
        @click="handleMenuGroupChange(item)"
      >
        <svg-icon class="cursor i-svg" name="default-sider-icon"></svg-icon>
      </li>
      <li class="nav-item"></li>
    </ul>
    <!-- 以下分别为以及菜单和二级菜单 -->
    <ul
      :class="
        showSider
          ? 'i-menu i-menu-light i-menu-vertical sys-menu show-sider'
          : 'i-menu i-menu-light i-menu-vertical sys-menu'
      "
      style="width: 398px"
    >
      <li
        v-for="e of topNavs"
        :key="e.pageId"
        :class="curMenu === e.pageId ? 'actived-menu i-menu-item-group' : 'i-menu-item-group'"
      >
        <div class="i-menu-item-group-title">{{ e.jaName }}</div>
        <ul v-show="curMenu === e.pageId">
          <div style="overflow-x: hidden; height: 100%; padding-bottom: 110px">
            <div
              style="
                position: relative;
                height: 100%;
                overflow-y: scroll;
                left: 17px;
                margin-left: 2px;
                padding-bottom: 30px;
              "
            >
              <li
                class="i-menu-item"
                v-for="t of e.secondMenuList"
                :key="t.pageId"
                @click="$router.push(t.url), (showSider = false)"
              >
                <div>
                  <svg-icon
                    class="i-svg"
                    name="default-sider-icon"
                    style="width: 50px; height: 50px; margin-top: 12px; position: relative; top: -3px"
                  ></svg-icon>
                </div>
                <p class="p">{{ t.jaName }}</p>
              </li>
            </div>
          </div>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@keyframes borderClipTop {
  75%,
  100% {
    clip: rect(0px 45px 29px 0px);
  }
}
@keyframes borderClipBottom {
  75%,
  100% {
    clip: rect(85px 116px 116px 75px);
  }
}

.i-svg {
  fill: white;
  margin: 5px 0px 0px 11px;
  overflow: hidden;
  width: 24px;
  height: 24px;
}
.ivu-layout .ivu-layout-has-sider {
  padding-top: 51px;
}
//自带取消
.i-menu-vertical.i-menu-light:after {
  display: none; //虚线
}
.i-menu-vertical .i-menu-item {
  color: var(--sider-menu-p);
  &:hover {
    color: var(--sider-menu-p-hover);
  }
}
.i-menu-light.i-menu-vertical .i-menu-item-active:not(.i-menu-submenu) {
  background: rgba(255, 255, 255, 0.9);
  color: var(--sider-menu-p-active);
  &:before {
    display: none;
  }
  &:after {
    display: none;
  }
}
.i-menu-vertical .i-menu-item-group-title {
  height: 40px;
  line-height: 40px;
  padding: 0;
  margin: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  color: var(--white);
  background-color: var(--sider-menu-title-background);
  text-align: center;
}
.i-menu-item-group {
  position: absolute;
  width: 100%;
  line-height: normal;
  opacity: 0;
}
.i-menu-item-group > ul {
  transition: transform 2s ease;
  top: 0;
  .i-menu-item {
    display: inline-block;
    width: 116px;
    height: 116px;
    margin: 0 2px 4px;
    padding: 14px 24px;
    cursor: pointer;
    position: relative;
    border-radius: 5px;
    white-space: nowrap;
    background: var(--sider-menu-icon-bg);
    transition: fill 0.1s ease-in-out;
    &:before {
      content: '';
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border: 2px solid var(--sider-menu-item-border-bottom);
      border-radius: 5px;
      clip: rect(74px 116px 116px 98px);
      filter: grayscale(1);
    }
    &:after {
      content: '';
      display: none;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      border: 2px solid var(--sider-menu-item-border-top);
      border-radius: 5px;
      clip: rect(0px 35px 52px 0px);
      filter: grayscale(1);
    }
    .i-svg {
      filter: var(--filter-svg-icon);
    }
    &:hover {
      &:before {
        display: block;
        animation: borderClipBottom 0.5s forwards ease-in;
        filter: none;
      }
      &:after {
        display: block;
        animation: borderClipTop 0.5s forwards ease-in;
        filter: none;
      }
      .i-svg {
        // TODO: 这里时强行变橘色， 需要提供橘色图标
        filter: var(--filter-svg-icon-hover);
      }
    }
    .p {
      width: 116px;
      font-size: 13px;
      margin-left: -25px;
      text-align: center;
    }
  }
}
.actived-menu {
  &.i-menu-item-group {
    opacity: 1;
  }
  &.nav-item {
    transition: background-color 0.2s ease;
    background-color: var(--sider-background-actived);
  }
  > .i-svg {
    // TODO: 这里时强行变橘色， 需要提供橘色图标
    filter: var(--filter-svg-icon-hover) !important;
  }
  ul:not(.navbar-nav) {
    height: 100%;
  }
}
.i-menu-item-selected {
  .i-svg {
    // TODO: 这里时强行变橘色， 需要提供橘色图标
    filter: var(--filter-svg-icon-hover) !important;
  }
}
.navbar-wrap {
  display: flex;
  position: fixed;
  height: 100%;
  text-align: left;
  z-index: 999;
  .navbar-nav {
    display: flex;
    width: 60px;
    background: var(--sider-background);
    transition: width 200ms ease;
    text-align: left;
    flex-direction: column;
    .nav-item {
      display: flex;
      min-height: 60px;
      position: relative;
      align-items: center;
      &:last-child {
        margin-top: auto;
      }
      .i-svg {
        margin-left: 17px;
        filter: brightness(5);
      }
    }
  }
  .sys-menu {
    display: flex;
    position: absolute;
    left: 60px;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    transition: transform 0.2s ease;
    background-color: var(--sider-menu-background);
    opacity: 0;
    transform: translateX(-562px);
    // 避免压住目录本身
    z-index: -1;
    &.show-sider {
      transform: translateX(0);
      opacity: 1;
    }
    .actived-menu {
      height: 100%;
    }
  }
}
</style>
