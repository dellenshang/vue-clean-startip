<script setup lang="ts"></script>

<template>
  <div>
    <Sider></Sider>
    <main class="content">
      <router-view />
      <!-- <div class="content_head">
        <div class="header">
          <div class="title1">
            <h1>出勤簿</h1>
          </div>
        </div>
        <div class="searchwrap"></div>
      </div>
      <div class="content_body">
      </div> -->
    </main>
    <Header></Header>
  </div>
</template>

<style lang="scss" scoped></style>
