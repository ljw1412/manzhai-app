<template>
  <div class="setting">
    图标风格
    <button @click="onChangeThemeClick">主题切换</button>
    <mz-button v-for="type of colorTypeList"
      :key="type"
      :type="type"
      ripple>测试按钮</mz-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Setting extends Vue {
  colorTypeList = ['', 'primary', 'success', 'warning', 'danger', 'info']

  onChangeThemeClick() {
    const rootDataset = document.documentElement.dataset
    rootDataset.theme = rootDataset.theme ? '' : 'dark'
  }
}
</script>

<style lang="scss" scoped>
button + button {
  margin-left: 10px;
}
</style>
