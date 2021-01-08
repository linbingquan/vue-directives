import copy from './directives/copy'
import longpress from './directives/longpress'
import debounce from './directives/debounce'
import emoji from './directives/emoji'
import lazy from './directives/lazyLoad'
import permission from './directives/permission'
import watermarker from './directives/waterMarker'
import draggable from './directives/draggable'

// 自定义指令
const directives = {
  copy,
  longpress,
  debounce,
  emoji,
  lazy,
  permission,
  watermarker,
  draggable
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}

export {
  copy as Copy,
  longpress as Longpress,
  debounce as Debounce,
  emoji as Emoji,
  lazy as Lazy,
  permission as Permission,
  watermarker as Watermarker,
  draggable as Draggable,
}