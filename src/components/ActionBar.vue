<template>
  <div class="actionbar">

    <div class="action-menu">
      <div class="action-menu__item"></div>
      <div class="action-menu__item"></div>
      <div class="action-menu__item action-menu__close">
        <svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512">
          <path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z" /></svg></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ActionBar extends Vue {}
</script>

<style lang="scss">
.actionbar {
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  background-color: #c20c0c;
  // border-bottom: 1px solid #a40011;
  -webkit-app-region: drag;
}

.action-menu {
  display: inline-flex;
  align-items: center;
  height: 100%;
  &__item {
    position: relative;
    width: 30px;
    height: 30px;
  }
}
</style>