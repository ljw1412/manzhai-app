import { VueConstructor } from 'vue'
import Icon from './Icon/index'
import Button from './Button/index'
import Cell from './Cell/index'
import CellGroup from './CellGroup/index'
import Switch from './Switch/index'

const components = [Icon, Button, Cell, CellGroup, Switch]

const install = function(Vue: VueConstructor, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install, Icon, Button }
