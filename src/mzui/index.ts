import { VueConstructor } from 'vue'
import Icon from './Icon/index'
import Button from './Button/index'

const components = [Icon, Button]

const install = function(Vue: VueConstructor, options = {}) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

export default { install, Icon, Button }
