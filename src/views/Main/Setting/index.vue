<template>
  <div class="setting">
    图标风格
    <button @click="onChangeThemeClick">主题切换</button>
    <mz-button v-for="type of colorTypeList"
      :key="type"
      :type="type"
      ripple
      @click="onClick">测试按钮</mz-button>
    <mz-button icon
      circle
      ripple
      disabled
      @click="onClick">
      <mz-icon name="md-contact"
        size="40"></mz-icon>
    </mz-button>
    <mz-button disabled
      @click="onClick">
      测试123
    </mz-button>
    <mz-switch v-model="checked"></mz-switch>
    <mz-switch v-model="checked"
      disabled></mz-switch>
    <mz-cell-group title="单元格组测试"
      type="card">
      <mz-cell title="单元格"
        desc="描述性文字">
        <mz-cell slot="child"
          title="子单元格"
          desc="子单元格描述性文字">
          <mz-cell slot="child"
            title="子单元格"
            desc="子单元格描述性文字">
          </mz-cell>
        </mz-cell>
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字"
        type="switch"
        size="small">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字"
        type="switch"
        v-model="checked">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字"
        type="switch"
        size="large">
      </mz-cell>
      <mz-cell title="单元格">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字">
      </mz-cell>
      <mz-cell title="单元格"
        desc="描述性文字">
      </mz-cell>
    </mz-cell-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
@Component
export default class Setting extends Vue {
  colorTypeList = ['', 'primary', 'success', 'warning', 'danger', 'info']
  checked = false
  theme = ''

  onChangeThemeClick() {
    this.theme = this.theme ? '' : 'dark'
  }

  onClick(e: MouseEvent) {
    console.log(e.target)
  }

  @Watch('theme')
  onThemeChange(val: string) {
    this.$changeTheme(val)
  }
}
</script>

<style lang="scss" scoped>
button + button {
  margin-left: 10px;
}
</style>
