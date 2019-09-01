<template>
  <div class="actionbar">
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
  border-bottom: 1px solid #a40011;
  -webkit-app-region: drag;
}
</style>