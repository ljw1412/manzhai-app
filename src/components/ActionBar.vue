<template>
  <div class="actionbar">

    <div class="action-menu">
      <div class="action-menu__item"></div>
      <div class="action-menu__item"></div>
      <div class="action-menu__item action-menu__close">
        <mz-icon name="ios-close"
          size="30"></mz-icon>
      </div>
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